import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private firestoreService: FirestoreService,
  ) { }

  public usersr=[]

  ngOnInit() {
    this.getUsers()
  }

  public getUsers(){
     this.firestoreService.getAllUsers().subscribe((users)=>{
       users.forEach((user:any)=>{
        this.usersr.push({
          data: user.payload.doc.data()
        })
       })
       console.log(this.usersr)

    }) 
  }

  public editInfo(){
    
  }

}
