import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/shared/services';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/components/modal/modal.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private firestoreService: FirestoreService,
    private modalService: NgbModal
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
    }) 
  }

  public editInfo(user){
   const modalRef= this.modalService.open(ModalComponent)
   modalRef.componentInstance.user = user;
  }

}
