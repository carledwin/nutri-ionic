import { DicasPage } from './../dicas/dicas';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import {AngularFireAuth} from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public fire: AngularFireAuth,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registrar(){

    let toast = this.toastCtrl.create({duration: 2000, position: 'bottom'});

    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.senha.value)
    .then( data => {

      console.log('Data >>>> ', data)

      toast.setMessage('Usuário criado com sucesso');
      toast.present();

      this.navCtrl.push(DicasPage);

    })
    .catch((error: any) => {
      
      if(error.code == 'auth/email-already-in-use'){
        
        toast.setMessage('Thrown if there already exists an account with the given email address.');
      } else if(error.code == 'auth/invalid-email'){
        
        toast.setMessage('Thrown if the email address is not valid.');
      } else if(error.code == 'auth/operation-not-allowed'){
        
        toast.setMessage('Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.');
      }else if(error.code == 'auth/weak-passwor'){
        
        toast.setMessage('Thrown if the password is not strong enough.');
      }
    
      toast.present();
    });
  }

}
