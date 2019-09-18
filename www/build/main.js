webpackJsonp([5],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordPressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WordPressService = /** @class */ (function () {
    function WordPressService(http) {
        this.http = http;
    }
    WordPressService.prototype.getRecentPosts = function (page) {
        if (page === void 0) { page = 1; }
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* WORDPRESS_REST_API_URL */] + 'posts?page=' + page)
            .map(function (resp) { return resp.json(); });
    };
    WordPressService.prototype.getAuthor = function (author) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* WORDPRESS_REST_API_URL */] + 'users/' + author)
            .map(function (resp) { return resp.json(); });
    };
    WordPressService.prototype.getPostCategories = function (post) {
        var _this = this;
        var observableBatch = [];
        post.categories.forEach(function (category) {
            observableBatch.push(_this.getCategories(category));
        });
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(observableBatch);
    };
    WordPressService.prototype.getCategories = function (category) {
        return this.http
            .get(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* WORDPRESS_REST_API_URL */] + 'categories/') //Config.WORDPRESS_REST_API_URL + 'categories/' + category)
            .map(function (resp) { return resp.json(); });
    };
    WordPressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], WordPressService);
    return WordPressService;
    var _a;
}());

//# sourceMappingURL=wordpress.service.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dicas_dicas__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recuperar_recuperar__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, fire) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.fire = fire;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
    }
    HomePage.prototype.entrar = function () {
        var _this = this;
        var toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
        this.fire.auth.signInWithEmailAndPassword(this.email.value, this.senha.value)
            .then(function (data) {
            console.log('Data do login: ' + data);
            _this.user.email = _this.email.value;
            _this.user.password = _this.senha.value;
            toast.setMessage('Login efetuado com sucesso');
            toast.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dicas_dicas__["a" /* DicasPage */]);
        })
            .catch(function (error) {
            if (error.code == 'auth/invalid-email') {
                toast.setMessage('Thrown if the email address is not valid.');
            }
            else if (error.code == 'auth/user-disabled') {
                toast.setMessage('Thrown if the user corresponding to the given email has been disabled.');
            }
            else if (error.code == 'auth/user-not-found') {
                toast.setMessage('Thrown if there is no user corresponding to the given email.');
            }
            else if (error.code == 'auth/wrong-password') {
                toast.setMessage('Thrown if the password is invalid for the given email, or the account corresponding to the email does not have a password set.');
            }
            toast.present();
        });
    };
    HomePage.prototype.cadastrar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.esqueciMinhaSenha = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__recuperar_recuperar__["a" /* RecuperarPage */]);
    };
    HomePage.prototype.entrarComFacebook = function () {
        var _this = this;
        console.log('iniciando login com facebook');
        var toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.auth.FacebookAuthProvider())
            .then(function (res) {
            console.log("RES >> ", res);
            console.log('Login no facebook efetuado com sucesso');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dicas_dicas__["a" /* DicasPage */]);
        })
            .catch(function (error) {
            var message = 'erro ao tentar fazer o login no facebook' + error.code;
            console.log(message);
            toast.setMessage(message);
            toast.present();
        });
    };
    HomePage.prototype.logarVisitante = function () {
        var _this = this;
        console.log('iniciando login como anonimo');
        var toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
        this.fire.auth.signInAnonymously()
            .then(function (res) {
            console.log("RES >> ", res);
            console.log('Login anonimo com sucesso');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__dicas_dicas__["a" /* DicasPage */]);
        })
            .catch(function (error) {
            if (error.code == 'auth/operation-not-allowed') {
                toast.setMessage('Thrown if anonymous accounts are not enabled. Enable anonymous accounts in the Firebase Console, under the Auth tab.');
                toast.present();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('senha'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "senha", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/carledwin/git/nutri-ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  \n<img class="logo" src="assets/imgs/garfoefaca13.png">\n\n<ion-item>\n  <ion-label>\n    <ion-icon name="person"></ion-icon> \n    Email: \n  </ion-label>\n  <ion-input type="text" #email></ion-input>\n</ion-item>\n\n<ion-item>  \n  <ion-label>\n    <ion-icon name="lock"></ion-icon> \n    Senha: \n  </ion-label>\n  <ion-input type="password" #senha></ion-input>\n</ion-item>\n\n<button class="logar" ion-button block (click)="entrar()">Logar</button>\n\n<button class="logar" ion-button block (click)="entrarComFacebook()" icon-start>\n  <ion-icon name="logo-facebook"></ion-icon>  \n  Logar com o Facebook\n</button>\n\n<button class="logar" color="danger" ion-button block (click)="logarVisitante()">Logar como visitante</button>\n\n<p class="cadastrar">\n  <a (click)="cadastrar()">Criar uma conta</a>\n</p>\n\n<p class="esqueciMinhaSenha">\n    <a (click)="esqueciMinhaSenha()">Esqueci minha senha</a>\n  </p>\n</ion-content>'/*ion-inline-end:"/home/carledwin/git/nutri-ionic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_wordpress_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostPage = /** @class */ (function () {
    function PostPage(navCtrl, navParams, wordPressService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.wordPressService = wordPressService;
        this.loadingCtrl = loadingCtrl;
        this.categories = new Array();
    }
    PostPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        loading.present();
        this.post = this.navParams.get('item');
        console.log('$$$$$$$ ', this.post);
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(this.getAuthorData(), this.getCategoriesData())
            .subscribe(function (data) {
            _this.user = data[0].name;
            _this.categories = data[1];
            loading.dismiss();
        });
    };
    PostPage.prototype.getAuthorData = function () {
        return this.wordPressService.getAuthor(this.post.author);
    };
    PostPage.prototype.getCategoriesData = function () {
        return this.wordPressService.getCategories(this.post);
    };
    PostPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-post',template:/*ion-inline-start:"/home/carledwin/git/nutri-ionic/src/pages/post/post.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title *ngIf="post">Post</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <div *ngIf="post">\n    <div>\n      <img [src]="post.better_featured_image.source_url" class="imgTopo" />\n    </div>\n  \n    <div class="post-title" [innerHTML]="post.title.rendered"></div>\n    \n    <p class="post-content" [innerHTML]="post.content.rendered"></p>\n  \n    <ion-row>\n      <ion-col>\n        <ion-icon name="calendar"></ion-icon>\n        {{ post.date.split(\'T\')[0] | date: \'d MMM, y\' }}\n      </ion-col>\n      \n      <ion-col text-right>\n        <ion-icon name="person"></ion-icon>\n        {{ user }}\n      </ion-col>\n    </ion-row>\n  \n    <p class="bold-title">Categoria: </p>\n    <ion-grid>\n      <ion-row>\n        <ion-col class="category-col" *ngFor="let category of categories">\n          <ion-badge>{{ category.name }}</ion-badge>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/carledwin/git/nutri-ionic/src/pages/post/post.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__services_wordpress_service__["a" /* WordPressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_wordpress_service__["a" /* WordPressService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]) === "function" && _d || Object])
    ], PostPage);
    return PostPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dicas_dicas__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, fire, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.toastCtrl = toastCtrl;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registrar = function () {
        var _this = this;
        var toast = this.toastCtrl.create({ duration: 2000, position: 'bottom' });
        this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.senha.value)
            .then(function (data) {
            console.log('Data >>>> ', data);
            toast.setMessage('Usuário criado com sucesso');
            toast.present();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__dicas_dicas__["a" /* DicasPage */]);
        })
            .catch(function (error) {
            if (error.code == 'auth/email-already-in-use') {
                toast.setMessage('Thrown if there already exists an account with the given email address.');
            }
            else if (error.code == 'auth/invalid-email') {
                toast.setMessage('Thrown if the email address is not valid.');
            }
            else if (error.code == 'auth/operation-not-allowed') {
                toast.setMessage('Thrown if email/password accounts are not enabled. Enable email/password accounts in the Firebase Console, under the Auth tab.');
            }
            else if (error.code == 'auth/weak-passwor') {
                toast.setMessage('Thrown if the password is not strong enough.');
            }
            toast.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('senha'),
        __metadata("design:type", Object)
    ], RegisterPage.prototype, "senha", void 0);
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/carledwin/git/nutri-ionic/src/pages/register/register.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Cadastro</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n\n<ion-content padding>\n  \n<h2 style="text-align: center">Vamos iniciar seu cadastro...</h2>\n\n<ion-item>\n  <ion-label>\n      <ion-icon name="person"></ion-icon> \n      Email: \n    </ion-label>\n  <ion-input type="text" #email></ion-input>\n</ion-item>\n\n<ion-item>  \n  <ion-label>\n    <ion-icon name="person"></ion-icon> \n    Senha: \n  </ion-label>\n  <ion-input type="password" #senha></ion-input>\n</ion-item>\n\n<button class="cadastrar" ion-button block (click)="registrar()">Cadastrar</button>\n\n</ion-content>'/*ion-inline-end:"/home/carledwin/git/nutri-ionic/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RecuperarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecuperarPage = /** @class */ (function () {
    function RecuperarPage(navCtrl, navParams, toastCtrl, fire) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.fire = fire;
    }
    RecuperarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecuperarPage');
    };
    RecuperarPage.prototype.recuperar = function () {
        var _this = this;
        var toast = this.toastCtrl.create({ duration: 2000, position: 'bottom' });
        this.fire.auth.sendPasswordResetEmail(this.email.value)
            .then(function (data) {
            console.log('Data do login: ' + data);
            toast.setMessage('A solicitação foi enviada para o seu email.');
            toast.present();
            _this.navCtrl.pop();
        })
            .catch(function (error) {
            if (error.code == 'auth/invalid-email') {
                toast.setMessage('Thrown if the email address is not valid.');
            }
            else if (error.code == 'auth/missing-android-pkg-name') {
                toast.setMessage('An Android package name must be provided if the Android app is required to be installed.');
            }
            else if (error.code == 'auth/missing-continue-uri') {
                toast.setMessage('A continue URL must be provided in the request.');
            }
            else if (error.code == 'auth/missing-ios-bundle-id') {
                toast.setMessage('An iOS Bundle ID must be provided if an App Store ID is provided.');
            }
            else if (error.code == 'auth/invalid-continue-uri') {
                toast.setMessage('The continue URL provided in the request is invalid.');
            }
            else if (error.code == 'auth/unauthorized-continue-uri') {
                toast.setMessage('The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase console.');
            }
            else if (error.code == 'auth/user-not-found') {
                toast.setMessage('Thrown if there is no user corresponding to the email address.');
            }
            toast.present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], RecuperarPage.prototype, "email", void 0);
    RecuperarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-recuperar',template:/*ion-inline-start:"/home/carledwin/git/nutri-ionic/src/pages/recuperar/recuperar.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Recuperar Senha</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <h2 style="text-align: center" padding> Vamos lá</h2>\n  <p style="text-align: center">Digite seu email</p>\n\n  <ion-item>\n      <ion-label>\n          <ion-icon name="person"></ion-icon> \n          Email: \n        </ion-label>\n      <ion-input type="text" #email></ion-input>\n    </ion-item>\n\n    <button class="recuperar" ion-button block (click)="recuperar()">Recuperar</button>\n</ion-content>\n'/*ion-inline-end:"/home/carledwin/git/nutri-ionic/src/pages/recuperar/recuperar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], RecuperarPage);
    return RecuperarPage;
}());

//# sourceMappingURL=recuperar.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/dicas/dicas.module": [
		463,
		4
	],
	"../pages/post/post.module": [
		467,
		3
	],
	"../pages/profile/profile.module": [
		464,
		2
	],
	"../pages/recuperar/recuperar.module": [
		465,
		1
	],
	"../pages/register/register.module": [
		466,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 201;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, fire, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.toastCtrl = toastCtrl;
        this.facebook = {
            nome: '',
            fotoUrl: ''
        };
        this.email = fire.auth.currentUser.email;
        this.facebook.fotoUrl = fire.auth.currentUser.photoURL;
        this.facebook.nome = fire.auth.currentUser.displayName;
        if (this.facebook.fotoUrl == null) {
            this.fotoPerfil = false;
        }
        else {
            this.fotoPerfil = true;
        }
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/carledwin/git/nutri-ionic/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Meu Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-thumbnail item-start *ngIf="fotoPerfil">\n          <img src="{{ facebook.fotoUrl }}">\n        </ion-thumbnail>\n        \n        <ion-thumbnail item-start *ngIf="!fotoPerfil">\n          <img src="assets/imgs/foto-perfil.jpg">\n        </ion-thumbnail>\n        \n          <h2 *ngIf="fotoPerfil">{{ facebook.nome }}</h2>\n          <h2 *ngIf="!fotoPerfil">Nutri Brasil</h2>\n    \n        <p>{{ email }}</p>\n      </ion-item>\n          \n</ion-content>\n'/*ion-inline-end:"/home/carledwin/git/nutri-ionic/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(313);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_dicas_dicas__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recuperar_recuperar__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_post_post__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_wordpress_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var firebaseAuth = {
    apiKey: "AIzaSyB6THfDFgALBlZ4AvTCcHnFU0JBR6LA9Vk",
    authDomain: "nutri-ionic.firebaseapp.com",
    databaseURL: "https://nutri-ionic.firebaseio.com",
    projectId: "nutri-ionic",
    storageBucket: "nutri-ionic.appspot.com",
    messagingSenderId: "650336561408",
    appId: "1:650336561408:web:46aef03c7c6ff2c6496be5"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dicas_dicas__["a" /* DicasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recuperar_recuperar__["a" /* RecuperarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_post_post__["a" /* PostPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/dicas/dicas.module#DicasPageModule', name: 'DicasPage', segment: 'dicas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperar/recuperar.module#RecuperarPageModule', name: 'RecuperarPage', segment: 'recuperar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/post/post.module#PostPageModule', name: 'PostPage', segment: 'post', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseAuth)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_dicas_dicas__["a" /* DicasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recuperar_recuperar__["a" /* RecuperarPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_post_post__["a" /* PostPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__services_wordpress_service__["a" /* WordPressService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WORDPRESS_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WORDPRESS_REST_API_URL; });
var WORDPRESS_URL = 'https://sujeitoprogramador.com/nutriapp/';
var WORDPRESS_REST_API_URL = WORDPRESS_URL + 'wp-json/wp/v2/';
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_dicas_dicas__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, fire) {
        var _this = this;
        var authObserver = fire.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_dicas_dicas__["a" /* DicasPage */];
                authObserver.unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */];
                authObserver.unsubscribe();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/carledwin/git/nutri-ionic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/carledwin/git/nutri-ionic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DicasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_post__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_wordpress_service__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DicasPage = /** @class */ (function () {
    function DicasPage(navCtrl, navParams, fire, toastCtrl, loadingCtrl, wordpressService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.wordpressService = wordpressService;
        this.posts = new Array();
        this.morePagesAvailable = true;
    }
    DicasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DicasPage');
    };
    DicasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.morePagesAvailable = true;
        if (!(this.posts.length > 0)) {
            var loading_1 = this.loadingCtrl.create();
            loading_1.present();
            this.wordpressService.getRecentPosts()
                .subscribe(function (data) {
                //console.log('data >>>>>: ', data);
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var post = data_1[_i];
                    console.log('post >>>>>: ', post);
                    //console.log('post.excerpt >>>>>: ', post.excerpt);
                    //console.log('post.excerpt.rendered >>>>>: ', post.excerpt.rendered);
                    post.excerpt.rendered = post.excerpt.rendered.split('<a>')[0] + '<p>';
                    _this.posts.push(post);
                }
                loading_1.dismiss();
            });
        }
    };
    DicasPage.prototype.logout = function () {
        var toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });
        this.fire.auth.signOut();
        toast.setMessage('Até logo');
        toast.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    };
    DicasPage.prototype.postTapped = function (event, post) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__post_post__["a" /* PostPage */], { item: post });
    };
    DicasPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var page = (Math.ceil(this.posts.length / 10)) + 1;
        var loading = true;
        this.wordpressService.getRecentPosts(page)
            .subscribe(function (data) {
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var post = data_2[_i];
                if (!loading) {
                    infiniteScroll.complete();
                }
                _this.posts.push(post);
                loading = false;
            }
        }, function (error) {
            _this.morePagesAvailable = false;
        });
    };
    DicasPage.prototype.doRefresh = function (refresher) {
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
        setTimeout(function () {
            refresher.complete();
        }, 2000);
    };
    DicasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-dicas',template:/*ion-inline-start:"/home/carledwin/git/nutri-ionic/src/pages/dicas/dicas.html"*/'\n<ion-header>\n  <ion-navbar color=\'primary\'>\n    <ion-title>Últimas Dicas</ion-title>\n    <ion-buttons end>\n      <button color="danger" ion-button block (click)="logout()">\n        <ion-icon class="toolbar-icon" name="log-out"></ion-icon></button>    \n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  \n  <ion-refresher (ionRefresh)=doRefresh($event)>\n    <ion-refresher-content pullingIcon="arrow-dropdown" refreshingSpinner="circles">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor="let post of posts">\n    <div>\n      <img [src]="post.better_featured_image.source_url" />\n    </div>\n\n    <ion-card-content>\n\n      <ion-card-title [innerHTML]="post.title.rendered"></ion-card-title>\n      <p [innerHTML]="post.excerpt.rendered"></p>\n      <ion-row no-padding>\n        <ion-col>\n          <button ion-button clear small color=\'primary\' ion-start>\n            {{ post.date.split(\'T\')[0] | date: \'d MMM, y\' }}\n          </button>\n        </ion-col>\n\n        <ion-col text-right>\n            <button ion-button small color=\'primary\' (click)="postTapped($event, post)" ion-start>\n              Leia Mais ...\n            </button>\n          </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n    \n  <ion-infinite-scroll [enabled]="morePagesAvailable" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Carregando ...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/home/carledwin/git/nutri-ionic/src/pages/dicas/dicas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__services_wordpress_service__["a" /* WordPressService */]])
    ], DicasPage);
    return DicasPage;
}());

//# sourceMappingURL=dicas.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map