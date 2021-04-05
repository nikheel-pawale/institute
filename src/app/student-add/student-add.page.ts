import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserService } from '../api/user.service';
import { ActionSheetController, NavController, MenuController, LoadingController, AlertController, ToastController, PopoverController } from '@ionic/angular';

//import { Camera, CameraOptions } from '@ionic-native/Camera/ngx';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.page.html',
  styleUrls: ['./student-add.page.scss'],
})
export class StudentAddPage implements OnInit {

  public postData = {
    full_name:'',
    mobile:'',
    email:'',
    address:'',
    city:'',
    state:'',
    enrollBy:'',
    profile_image:'',
    prevAcademyPassoutYear:'',
    prevAcademyCourseName:'',
    newCourseId:'',
    newAdmissionYear:''

  };

  userLoginID: any;
  public boxName: any;
  coursesListData: any [];

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
    var newCourseId = this.postData.newCourseId;
    var newAdmissionYear = this.postData.newAdmissionYear;

    if(full_name=="" || mobile=="" || email=="" || newCourseId=="" || newAdmissionYear==""){
      alert("Please fill all mendatory fields");
    }else{
      
    }

  }

}
