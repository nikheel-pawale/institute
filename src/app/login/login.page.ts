import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { NavController, MenuController, LoadingController, AlertController, ToastController } from '@ionic/angular';
import { UserService } from '../api/user.service';

import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
      email: '',
      password: '',
      DeviceType: 'a',
      DeviceID: '123456',
  };

  constructor(
    private router: Router, 
  	private route: ActivatedRoute, 

    private navController: NavController, 
    private menuController: MenuController, 
    private loadingController: LoadingController, 
    private alertController: AlertController, 
    private toastController: ToastController, 
    private authServices: UserService,
    public storage: Storage
  ) { }

  ngOnInit() {
  }

  async loginAction() {

    //this.presentLoading();
    this.authServices.login(this.postData).toPromise().then(
      (res: any) => {
        console.log(res);
        // if (res.success == 1) {
        //   //this.router.navigate(['tabs/home']);
        // }
      }
    );
  }


  async presentAlert(alertmessage: string) {
		const alert = await this.alertController.create({
			header: 'Error',
			message: alertmessage,
			buttons: ['OK']
		});

		await alert.present();
	}
	  
	async presentToast(message) {
		const toast = await this.toastController.create({
		  position: 'top',
		  message: message,
		  duration: 5000
		});

		await toast.present();
	}

	async presentLoading() {
		const loading = await this.loadingController.create({
		  message: 'Please wait...',
		  //duration: 2000
		});
		await loading.present();
	
	}

}
