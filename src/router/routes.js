const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "/home", component: () => import("pages/HomePage.vue") },
      {
        path: "/recyclage",
        component: () => import("pages/RecyclagePage.vue"),
      },
      {
        path: "/reconditionnement",
        component: () => import("pages/ReconditionnementPage.vue"),
      },

      {
        path: "/deposer-annonce",
        component: () => import("pages/DeposerAnnoncePage.vue"),
      },
      {
        path: "/connexion",
        component: () => import("pages/ConnexionPage.vue"),
      },
      {
        path: "/inscription",
        component: () => import("pages/InscriptionPage.vue"),
      },
      {
        path: "/profil",
        component: () => import("pages/ProfilPage.vue"),
      },
      {
        path: "/mes-annonces",
        component: () => import("pages/MesAnnoncesPage.vue"),
      },
      {
        path: "/messagerie/:id",
        component: () => import("pages/MessageriePage.vue"),
      },
      {
        path: "/messagerie",
        component: () => import("pages/ContactsPage.vue"),
      },
      {
        path: "/mes-reservation",
        component: () => import("pages/MesReservationPage.vue"),
      },
      {
        path: "/notifications",
        component: () => import("pages/NotificationsPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
