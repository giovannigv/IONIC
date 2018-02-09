import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title:'Info',
      subTitle: message,
      buttons:['OK']
    }).present();
  }
  
  signInUser(){
    //this.fire.auth.sendPasswordResetEmail();
    //o username tem 2 jeitos de fzr. 1: com o proprio email, 2 adicionar o domain atras do nome dele
    this.fire.auth.signInWithEmailAndPassword(this.user.value + '@domain.xta', this.password.value)
    .then(data => {
        //console.log('data: ', this.fire.auth.currentUser);
        this.alert('Success! You\'re logged in');
        this.navCtrl.setRoot (LoggedinPage);
    })
    .catch( error =>{
      this.alert(error.message);
      //console.log('Error: ', error);
    })
    //console.log('Deveria entrar', this.user.value, this.password.value);
  }

}
