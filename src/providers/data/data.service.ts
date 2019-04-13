//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technology } from '../../models/technology'

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataService {

  categories: string[] = ['Front', 'Back', 'Fullstack', 'Hybride', 'Autre'];

  constructor() {
    console.log('Hello DataProvider Provider');
  }

  technologies: Technology[] = [
    { name: 'Angular', category: 'Front' }, 
    { name: 'PWA', category: 'Front' }, 
    { name: 'Ionic', category: 'Front' }, 
    { name: 'Node', category: 'Backend' }
  ];

  getAllTechnologies() {
    return this.technologies;
  }

  //passe les categories
  getAllCategories() {
    return this.categories;
  }

  // Ajoute une technologie au tableau en dur
  addTechnology(technology: Technology) {
    this.technologies = [...this.technologies, technology];
    console.log(this.technologies);
  }

  // méthode search pour la recherche dans accueil.ts
  search(term: string) {
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term));
  }

}
