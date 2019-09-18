import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Config from '../config';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WordPressService{

    constructor(public http: Http){}

    getRecentPosts(page: number = 1){

        return this.http
                    .get(Config.WORDPRESS_REST_API_URL + 'posts?page=' + page)
                    .map(resp => resp.json());
    }

    getAuthor(author){

        return this.http
                    .get(Config.WORDPRESS_REST_API_URL + 'users/' + author)
                    .map(resp => resp.json());
    }

    getPostCategories(post){

        let observableBatch = [];

        post.categories.forEach(category => {
                                    observableBatch.push(this.getCategories(category));
                                });

        return Observable.forkJoin(observableBatch);
    }

    getCategories(category){

        return this.http
                    .get(Config.WORDPRESS_REST_API_URL + 'categories/') //Config.WORDPRESS_REST_API_URL + 'categories/' + category)
                    .map(resp => resp.json());
    }


}