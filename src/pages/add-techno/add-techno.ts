import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data/data.service';
import { Technology } from '../../models/technology';



@Component({
  selector: 'page-add-techno',
  templateUrl: 'add-techno.html',
})
export class AddTechnoPage {
  categories: string[];
  technology: Technology = { name: '', category: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
  }

  ionViewWillLoad() {
    // récuperation des categories depuis le service
    this.categories = this.dataService.getAllCategories();
  }

  // récupération de la technology depuis le formulaire
  addTechnology(){
    this.dataService.addTechnology(this.technology)
  }

}
