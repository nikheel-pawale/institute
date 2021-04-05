import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  searchlist : any;

  constructor() { }

  ngOnInit() {
    this.searchOptions();
  }


  searchOptions()
  {
    this.searchlist =
      [
        {
          title : "Institute",
          url   : "/tabs/",
          icon  : "business-outline"
        },
        {
          title : "Courses",
          url   : "/tabs/",
          icon  : "location-outline"
        },
        {
          title : "Member",
          url   : "/tabs/",
          icon  : "locate-outline"
        },
        {
          title : "Location",
          url   : "/tabs/",
          icon  : "people-outline"
        },
        
    	]
  }

}
