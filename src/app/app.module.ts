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
import { PostPage } from '../pages/post/post';
import { TabsPage } from './../pages/tabs/tabs';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';

import { WordPressService} from '../services/wordpress.service';

import { HttpModule } from '@angular/http';

const firebaseAuth = {
    apiKey: "...",
    authDomain: "...",
    databaseURL: "...",
    projectId: "...",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DicasPage,
    RegisterPage,
    RecuperarPage,
    ProfilePage,
    PostPage,
    TabsPage
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
    PostPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WordPressService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
