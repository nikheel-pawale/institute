import { Component } from '@angular/core';

import { UserService } from "../api/user.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data_response: any = [];

  constructor(
    private authServices: UserService,
  ) {}

  ionViewWillEnter() {
    this.authServices.home().subscribe((res) => {
      this.data_response = res['data_response'];
    });
  }

  // openPage(post_type) {
  //   this.router.navigate(["/tabs/post-filter/", { post_type: post_type }]);
  // }


}
