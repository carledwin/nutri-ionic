import { AngularFireAuth } from 'angularfire2/auth';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-recuperar',
  templateUrl: 'recuperar.html',
})

export class RecuperarPage {

@ViewChild('email') email;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public toastCtrl: ToastController,
              public fire: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarPage');
  }

  recuperar(){
    
    let toast = this.toastCtrl.create({duration:2000, position: 'bottom'});
    
    this.fire.auth.sendPasswordResetEmail(this.email.value)
    .then(data => {

      console.log('Data do login: ' + data);

      toast.setMessage('A solicitação foi enviada para o seu email.');
      toast.present();

      this.navCtrl.pop();
    })
    .catch((error: any) => {

      if(error.code == 'auth/invalid-email'){

        toast.setMessage('Thrown if the email address is not valid.');
      }else if(error.code == 'auth/missing-android-pkg-name'){

        toast.setMessage('An Android package name must be provided if the Android app is required to be installed.');
      }else if(error.code == 'auth/missing-continue-uri'){

        toast.setMessage('A continue URL must be provided in the request.');
      }else if(error.code == 'auth/missing-ios-bundle-id'){

        toast.setMessage('An iOS Bundle ID must be provided if an App Store ID is provided.');
      }else if(error.code == 'auth/invalid-continue-uri'){

        toast.setMessage('The continue URL provided in the request is invalid.');
      }else if(error.code == 'auth/unauthorized-continue-uri'){

        toast.setMessage('The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.');
      }else if(error.code == 'auth/user-not-found'){

        toast.setMessage('Thrown if there is no user corresponding to the email address.');
      }

      toast.present();
    });
}
}
