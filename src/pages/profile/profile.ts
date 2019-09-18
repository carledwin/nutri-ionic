import { HomePage } from './../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  email: string;
  fotoPerfil: boolean;

  facebook = {
    nome: '',
    fotoUrl:''
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController) {

    this.email = fire.auth.currentUser.email;
    this.facebook.fotoUrl = fire.auth.currentUser.photoURL;
    this.facebook.nome = fire.auth.currentUser.displayName;

    if(this.facebook.fotoUrl == null){
      this.fotoPerfil = false;
    }else{
      this.fotoPerfil = true;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout(){

    let toast = this.toastCtrl.create({duration:3000, position:'bottom'});

    this.fire.auth.signOut();

    toast.setMessage('Até logo');
    toast.present();

    this.navCtrl.setRoot(HomePage);
  }

}
