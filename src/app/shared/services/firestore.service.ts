import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private db: AngularFirestore
  ) { }

  public getAllUsers(){
    return this.db.collection('users').snapshotChanges();
  }
  public editUser(user){
    //user.id
    return this.db.collection('users').doc(user.id).update({
      name: user.name,
      lastname: user.lastname,
      email: user.email
    }).then(()=>{
      console.log("Success")
    }).catch((error) => {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });
  }
}
