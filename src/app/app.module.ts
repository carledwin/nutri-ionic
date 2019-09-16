import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DicasPage } from './../pages/dicas/dicas';
import { RegisterPage } from '../pages/register/register';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth'

const firebaseAuth = {
    apiKey: "AIzaSyB6THfDFgALBlZ4AvjklçTCcHnFU0JBR6LA9Vk",
    authDomain: "nutriyuy-ioyynic.firebaseapp.com",
    databaseURL: "https://nutryytti-ionic.firebaseio.com",
    projectId: "nutriyuy-ioyynic",
    storageBucket: "nutriyuy-ioyynic.appspot.com",
    messagingSenderId: "6503365616554408",
    appId: "1:650336561408:web:46aef087673c7c6ff2c6496be5"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DicasPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseAuth)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DicasPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
