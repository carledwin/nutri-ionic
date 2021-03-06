import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import {AngularFireAuth} from 'angularfire2/auth';
import { User} from './user';

import { RegisterPage } from '../register/register';
import { RecuperarPage } from '../recuperar/recuperar';

import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: User = new User();
  tabBarElement: any;

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController,
              public fire: AngularFireAuth) {
  
    this.tabBarElement = document.querySelector('.show-tabbar');
  }

  ngAfterViewInit() {
    
    let tabs = document.querySelectorAll('.show-tabbar');

    if(tabs !== null){

      Object.keys(tabs).map((key) => {
               
              tabs[key].style.display = 'none';
            });
    }
  }

  ionViewWillLeave(){
   
    let tabs = document.querySelectorAll('.show-tabbar');

    if(tabs !== null){

      Object.keys(tabs)
            .map((key) => {
              
              tabs[key].style.display = 'none';
            });
    }
  }

  entrar(){
    
    let toast = this.toastCtrl.create({duration:3000, position: 'bottom'});
    
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
    .then(data => {

      console.log('Data do login: ' + data);

      this.user.email = this.email.value;
      this.user.password = this.senha.value;
      
      toast.setMessage('Login efetuado com sucesso');
      toast.present();

      this.navCtrl.push(TabsPage);
    })
    .catch((error: any) => {

      if(error.code == 'auth/invalid-email'){

        toast.setMessage('Thrown if the email address is not valid.');
      }else if(error.code == 'auth/user-disabled'){

        toast.setMessage('Thrown if the user corresponding to the given email has been disabled.');
      }else if(error.code == 'auth/user-not-found'){

        toast.setMessage('Thrown if there is no user corresponding to the given email.');
      }else if(error.code == 'auth/wrong-password'){

        toast.setMessage('Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.');
      }

      toast.present();
    });

  }

  cadastrar(){
    this.navCtrl.push(RegisterPage);   
  }

  esqueciMinhaSenha(){
    this.navCtrl.push(RecuperarPage);
  }

  entrarComFacebook(){
    
    console.log('iniciando login com facebook');

    let toast = this.toastCtrl.create({duration:10000, position: 'bottom'});
        
    this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => {
      
      console.log("RES >> ", res);
      console.log('Login no facebook efetuado com sucesso');
      this.navCtrl.push(TabsPage);
    })
    .catch((error: any) => {
      
      let message = 'erro ao tentar fazer o login no facebook' + error.code;
      
      console.log(message);
      toast.setMessage(message);
      toast.present();
    });
  }

  logarVisitante(){
    
    console.log('iniciando login como anonimo');

    let toast = this.toastCtrl.create({duration:3000, position: 'bottom'});
        
    this.fire.auth.signInAnonymously()
    .then(res => {
      
      console.log("RES >> ", res);
      console.log('Login anonimo com sucesso');
      this.navCtrl.push(TabsPage);
    })
    .catch((error: any) => {
      
      if(error.code == 'auth/operation-not-allowed'){

        toast.setMessage('Thrown if anonymous accounts are not enabled. Enable anonymous accounts in the Firebase Console, under the Auth tab.');
        toast.present();
      }

    });
  }
}
