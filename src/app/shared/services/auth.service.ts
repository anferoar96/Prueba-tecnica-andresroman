import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authUser:any;

  constructor(
    private dbAuth:AngularFireAuth,
    private router:Router
  ) { }

  login(email:string,password:string){
    this.dbAuth.signInWithEmailAndPassword(email,password)
      .then((user)=>{
        this.authUser=user;
        this.router.navigate(['/dashboard']);
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  logout(){
    this.dbAuth.signOut().then(()=>{
      this.router.navigate(['/login'])
    }).catch((error)=>{
      console.log("We found an error "+error)
    })
  }
}
