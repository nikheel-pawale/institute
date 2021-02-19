import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';


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
  ) { }

  ngOnInit() {
  }

  async loginAction() {

    this.router.navigate(['tabs/home']);

  }

}
