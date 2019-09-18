import { WordPressService } from './../../services/wordpress.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  post: any;
  user: string;
  categories: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public wordPressService: WordPressService,
    public loadingCtrl: LoadingController) {
  }

  ionViewWillEnter(){
    
    let loading = this.loadingCtrl.create();
    loading.present();

    this.post = this.navParams.get('item');
    console.log('$$$$$$$ ', this.post);
    Observable.forkJoin(
      this.getAuthorData(),
      this.getCategoriesData())
    .subscribe(data =>{
      this.user =data[0].name;
      this.categories = data[1];
      loading.dismiss();
    });
  }

  getAuthorData(){
    
    return this.wordPressService.getAuthor(this.post.author);
  }

  getCategoriesData(){

    return this.wordPressService.getCategories(this.post);
  }

}
