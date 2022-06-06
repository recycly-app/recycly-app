<template>
  <q-card id="mapContainer" class="basemap"></q-card>
  <!-- <div id="instructions" class=""></div> -->
</template>

<script>
import mapboxgl from "mapbox-gl";
import VueGeolocation from "vue-browser-geolocation";

export default {
  name: "MapLocalisation",
  props: {
    coords: String,
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiaG9jaW5lZmRuIiwiYSI6ImNsM2ViYWxmZDBnaTUzZXByczF0d21tM24ifQ.rchE7UkMjJBayMFfCJX0dA",
    };
  },
  // ---------------------------   geolocalisation   ---------------------------------
  mounted() {
    let start = [];
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        let coordinates = pos.coords;
        start[1] = coordinates.latitude;
        start[0] = coordinates.longitude;
        mapboxgl.accessToken = this.accessToken;
        let coordsJSON = JSON.parse(this.coords);

        const map = new mapboxgl.Map({
          container: "mapContainer",
          style: "mapbox://styles/mapbox/streets-v11",
          center: [start[0], start[1]],
          zoom: 15,
        });
        new mapboxgl.Marker({ color: "red" })
          .setLngLat([start[0], start[1]])
          .addTo(map);

        // function to make a directions request
        async function getRoute(end) {
          const query = await fetch(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
            { method: "GET" }
          );
          const json = await query.json();
          const data = json.routes[0];
          const route = data.geometry.coordinates;
          const geojson = {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: route,
            },
          };

          if (map.getSource("route")) {
            map.getSource("route").setData(geojson);
          } else {
            map.addLayer({
              id: "route",
              type: "line",
              source: {
                type: "geojson",
                data: geojson,
              },
              layout: {
                "line-join": "round",
                "line-cap": "round",
              },
              paint: {
                "line-color": "#3887be",
                "line-width": 5,
                "line-opacity": 0.75,
              },
            });
          }

          // add turn instructions here at the end
          // get the sidebar and add the instructions
          // const instructions = document.getElementById("instructions");
          // const steps = data.legs[0].steps;

          // let tripInstructions = "";
          // for (const step of steps) {
          //   tripInstructions += `<li>${step.maneuver.instruction}</li>`;
          // }
          // instructions.innerHTML = `<p><strong>Durée du trajet: ${Math.floor(
          //   data.duration / 60
          // )} min 🚗 </strong></p><ol>${tripInstructions}</ol>`;
        }

        map.on("load", () => {
          // make an initial directions request that
          // starts and ends at the same location
          getRoute(start);

          // Add starting point to the map
          map.addLayer({
            id: "point",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: start,
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#3887be",
            },
          });
          getRoute([coordsJSON.lng, coordsJSON.lat]);
        });
      },
      (error) => console.log(error)
    );
  },
};
</script>

<style>
.basemap {
  width: 100%;
  height: 100%;
}
canvas {
  width: 100% !important;
  height: 100% !important;
}
#instructions {
  position: absolute;
  width: 25%;
  margin: 25px;
  top: 0;
  right: 0;
  padding: 20px;
  background-color: #fff;
  overflow-y: scroll;
  font-family: sans-serif;
}
</style>
