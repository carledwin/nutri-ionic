import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import {AngularFireAuth} from 'angularfire2/auth';
import { User} from './user';

import { DicasPage } from './../dicas/dicas';
import { RegisterPage } from '../register/register';
import { RecuperarPage } from '../recuperar/recuperar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: User = new User();

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController, 
              public toastCtrl: ToastController,
              public fire: AngularFireAuth) {
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

      this.navCtrl.push(DicasPage);
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

}
