import { HomePage } from './../pages/home/home';
import { TabsPage } from './../pages/tabs/tabs';
import { AngularFireAuth} from 'angularfire2/auth';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              fire: AngularFireAuth) {

    const authObserver = fire.authState.subscribe(user => {

      if(user){
       
        this.rootPage = TabsPage;
        authObserver.unsubscribe();
      }else{

        this.rootPage = HomePage;
        authObserver.unsubscribe();
      }

    });
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

