import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController, private fire: AngularFireAuth, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string){
    this.alertCtrl.create({
      title:'Info',
      subTitle: message,
      buttons:['OK']
    }).present();
  }

  registerUser(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value + '@domain.xta', this.password.value)
    .then(data => {
      this.alert('Registered!');
      //console.log('got data ', data);
    })
    .catch(error => {
      this.alert(error.message);
      
      //console.log('got an error', error);
    })
    //console.log('Deveria registrar',this.user.value, this.password.value);
  }

}
