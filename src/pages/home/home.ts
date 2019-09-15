import { DicasPage } from './../dicas/dicas';
import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('usuario') usuario;
  @ViewChild('senha') senha;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }


  entrar(){
      
    console.log('usuario > ', this.usuario.value)
    console.log('senha > ' + this.senha.value)

    let toast = this.toastCtrl.create({duration:3000, position: 'bottom'});

    if("carledwin" != this.usuario.value && "senha1234" != this.usuario.value){

      toast.setMessage('Usuário ou senha não encontrado');
      toast.present();
    }else{

      this.navCtrl.push(DicasPage);

      toast.setMessage('Logado com sucesso');
      toast.present();
    }

  }

}
