import { Component, OnInit } from '@angular/core';

import { Storage } from '@ionic/storage';
import { UserService } from '../api/user.service';
import { ActionSheetController, NavController, MenuController, LoadingController, AlertController, ToastController, PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.page.html',
  styleUrls: ['./member-add.page.scss'],
})
export class MemberAddPage implements OnInit {

  public postData = {
    full_name:'',
    mobile:'',
    email:'',
    address:'',
    city:'',
    state:'',
  };

  userLoginID: any;
  public boxName: any;

  constructor(
    private authServices: UserService,
    private navController: NavController,
    private menuController: MenuController, 
    private alertController: AlertController, 
    private toastController: ToastController,
    private loadingController: LoadingController,
    //private camera: Camera,
    public actionSheetController: ActionSheetController,
  ) { }

  ngOnInit() {
  }

  submitPostAction(){

    var full_name = this.postData.full_name;
    var mobile = this.postData.mobile;
    var email = this.postData.email;

    if(full_name=="" || mobile=="" || email==""){
      alert("Please fill all mendatory fields");
    }else{
      
    }

  }

}
