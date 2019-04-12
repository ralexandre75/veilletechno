import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { DataService } from '../../providers/data/data.service';
import { Technology } from '../../models/technology';


@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class AccueilPage {

  technologies: Technology[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataService: DataService, private loadingCtrl: LoadingController) {
  }

  ionViewWillLoad() {

    // Mise en place du loader
    const loader = this.loadingCtrl.create({
      content: 'veuiller patienter',
      // on peut mettre duration à la place du setTimeout
      // duration: 2000
    });
    loader.present();

    
    console.log('ionViewDidLoad AccueilPage');

    // Mise en attente de 2 secondes
    setTimeout(() => {

      // Récupération des données depuis le service
      this.technologies = this.dataService.getAllTechnologies();
      console.log(this.technologies);

      // Arrêt du loader "veuillez patienter"
      loader.dismiss();
    }, 2000);
    
  }

  // création de la méthode de recherche
  search(event) {
    this.technologies = this.dataService.search(event.target.value.trim());
  }

}
