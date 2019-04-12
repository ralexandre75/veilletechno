import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../providers/data/data.service';
import { Technology } from '../../models/technology';


@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  technologies: Technology[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad AccueilPage');
    this.technologies = this.dataService.getAllTechnologies();
    console.log(this.technologies);
  }

}
