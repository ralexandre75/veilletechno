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

}
