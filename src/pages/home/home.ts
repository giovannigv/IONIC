import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';

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
      this.navCtrl.push(LoginPage);
      }

  register(){
    this.navCtrl.push(RegisterPage);
  }

}
