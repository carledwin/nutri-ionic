import { HomePage } from './../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html',
})
export class DicasPage {

  email: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController) {

    this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DicasPage');
  }

  logout(){

    let toast = this.toastCtrl.create({duration:3000, position:'bottom'});

    this.fire.auth.signOut();

    toast.setMessage('Até logo');
    toast.present();

    this.navCtrl.setRoot(HomePage);
  }

}
