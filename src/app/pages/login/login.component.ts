import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private authService:AuthService
  ) {}

  ngOnInit() {
    this.loginForm=this.fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }
  
  ngOnDestroy() {
  }

  onSubmit(){
    var email=this.loginForm.value.email
    var password=this.loginForm.value.password
    this.authService.login(email,password)
  }

}
