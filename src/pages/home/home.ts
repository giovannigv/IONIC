import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FirstPage } from '../first/first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  openFirstPage(){
    this.navCtrl.push(FirstPage);
    
  }
  signIn(){
      console.log(this.username.value, this.password.value);
      if(this.username.value == "admin" && this.password.value){
        let alert = this.alertCtrl.create({
          title: 'Login Succeful',
          subTitle: 'Congrats',
          buttons: ['OK']
        });
        alert.present();
      }
  }

}
