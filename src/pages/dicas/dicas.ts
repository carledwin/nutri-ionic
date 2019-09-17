import { PostPage } from './../post/post';
import { HomePage } from './../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';

import { WordPressService } from './../../services/wordpress.service';

@IonicPage()
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html',
})
export class DicasPage {

  posts: Array<any> = new Array<any>();
  morePageAvailable: boolean = true;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fire: AngularFireAuth,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public wordpressService: WordPressService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DicasPage');
  }

  ionViewWillEnter(){

    this.morePageAvailable = true;

    if(!(this.posts.length > 0)){
      
      let loading = this.loadingCtrl.create();
      loading.present();

      this.wordpressService.getRecentPosts()
                            .subscribe(data => {

                              //console.log('data >>>>>: ', data);

                              for(let post of data){
                                
                                //console.log('post >>>>>: ', post);
                                
                                //console.log('post.excerpt >>>>>: ', post.excerpt);

                                //console.log('post.excerpt.rendered >>>>>: ', post.excerpt.rendered);

                                post.excerpt.rendered = post.excerpt.rendered.split('<a>')[0] + '<p>';
                                this.posts.push(post);
                              }
                              loading.dismiss();
                            });
    }
  }

  logout(){

    let toast = this.toastCtrl.create({duration:3000, position:'bottom'});

    this.fire.auth.signOut();

    toast.setMessage('Até logo');
    toast.present();

    this.navCtrl.setRoot(HomePage);
  }

  postTapped(event, post){

    this.navCtrl.push(PostPage);
  }
}
