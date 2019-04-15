//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Technology } from '../../models/technology';
import { Schedule } from '../../models/schedule';
import Dexie from 'dexie';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataService {

  db;
  categories: string[] = ['Front', 'Back', 'Fullstack', 'Hybride', 'Autre'];
  priorities: string[] = ['basse', 'moyenne', 'haute'];
  schedules: Schedule[] = [];

  constructor() {
    this.db = new Dexie('veilletechnobis');
    this.db.version(1).stores({
      schedules: '++id, name',
      technologies: '++id'
    })
  }

/*   technologies: Technology[] = [
    { name: 'Angular', category: 'Front' }, 
    { name: 'PWA', category: 'Front' }, 
    { name: 'Ionic', category: 'Front' }, 
    { name: 'Node', category: 'Backend' }
  ]; */

  technologies: Technology[];

  //passe les technologies
  /* getAllCategories() {
    return this.categories;
  } */

  getAllTechnologies(): Dexie.Promise<Technology[]> {
    return this.db.technologies.toArray();
  }

  //passe les categories
  getAllCategories() {
    return this.categories;
  }

  // passe les priorities
  getAllPriorities() {
    return this.priorities;
  }

  getAllSchedules(): Dexie.Promise<Schedule[]> {
    return this.db.schedules.toArray();
  }

  // Ajoute une technologie au tableau en dur
  addTechnology(technology: Technology) {
    //this.technologies = [...this.technologies, technology];
    //console.log(this.technologies);

    //avec dixie
    this.db.technologies.add(technology);
    
  }

  createSchedule(schedule: Schedule) {
    //this.schedules = [...this.schedules, schedule];
    //console.log(this.schedules);
    this.db.schedules.add(schedule);
  }

  // méthode search pour la recherche dans accueil.ts
  search(term: string) {
    return this.technologies.filter(tech => tech.name.toLocaleLowerCase().includes(term));
  }



}
