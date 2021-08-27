import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public authUser:any;
  public names:string;
  constructor(
    location: Location,  
    private element: ElementRef, 
    private router: Router,
    private auth:AuthService
    ) {
    this.location = location;
  }

  ngOnInit() {
    this.authUser=this.auth.authUser
    this.names=this.authUser.user.displayName.split(" ",2).join(" ");
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

  logout(){
    this.auth.logout()
  }

  getTitle(){
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if(titlee.charAt(0) === '#'){
        titlee = titlee.slice( 1 );
    }

    for(var item = 0; item < this.listTitles.length; item++){
        if(this.listTitles[item].path === titlee){
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

}
