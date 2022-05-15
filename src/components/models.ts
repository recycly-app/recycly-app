export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface AnnonceReconditionnement {
  id: number;
  titre: string;
  description: string;
  date: string;
  photo_annonce: string;
  prix: number;
  categorie: string;
  etat: string;
  lieu_recuperation: string;
}
