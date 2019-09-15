import { DicasPage } from './../dicas/dicas.page';
import { Component, ViewChild } from '@angular/core';

import {NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  @ViewChild('usuario') usuario;

  @ViewChild('senha') senha;

  constructor(public navController: NavController, public toastController: ToastController) {}

    entrar(){
      
      console.log('usuario > ', this.usuario.value)
      console.log('senha > ' + this.senha.value)

      let toastController = this.toastController.create({duration:3000, position: 'bottom'});

      if("carledwin" != this.usuario.value && "senha1234" != this.usuario.value){

        toastController.setMessage('Usuário ou senha não encontrado');
        toastController.present();
      }else{
        this.navController.push(DicasPage);

        toastController.setMessage('Logado com sucesso');
        toastController.present();
      }

    }
}
