import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FirestoreService } from 'src/app/shared/services';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    @Input() public user;
    public updateForm:FormGroup;


  constructor(
    private fb: FormBuilder,
    private firestoreService: FirestoreService,
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
      this.updateForm=this.fb.group({
          id:[this.user.id,[Validators.required]],
          name:[this.user.name,[Validators.required]],
          lastname:[this.user.lastname,[Validators.required]],
          email:[this.user.email,[Validators.required]],
      })
  }

  onSubmit() {
      var ans=this.firestoreService.editUser(this.updateForm.value)
      if(ans!=undefined){
        this.activeModal.dismiss('Cross click')
      }
  }

}