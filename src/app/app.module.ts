import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DicasPage } from './../pages/dicas/dicas';
import { RegisterPage } from '../pages/register/register';
import { RecuperarPage } from '../pages/recuperar/recuperar';
import { ProfilePage } from '../pages/profile/profile';
import { PostPage } from './../pages/post/post';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { WordPressService} from '../services/wordpress.service';

import { HttpModule } from '@angular/http';

const firebaseAuth = {
    apiKey: "AIzaSyB6THfDFgALBlZ4AvTCcHnFU0JBR6LA9Vk",
    authDomain: "nutri-ionic.firebaseapp.com",
    databaseURL: "https://nutri-ionic.firebaseio.com",
    projectId: "nutri-ionic",
    storageBucket: "nutri-ionic.appspot.com",
    messagingSenderId: "650336561408",
    appId: "1:650336561408:web:46aef03c7c6ff2c6496be5"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DicasPage,
    RegisterPage,
    RecuperarPage,
    ProfilePage,
    PostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseAuth)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DicasPage,
    RegisterPage,
    RecuperarPage,
    ProfilePage,
    PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WordPressService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
