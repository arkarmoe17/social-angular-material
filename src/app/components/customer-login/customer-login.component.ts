import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.sass']
})
export class CustomerLoginComponent implements OnInit {

  public loginForm!: FormGroup;

  public model:any;

  public respon: any;

  isMobileLogin: boolean = true;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      mobile: [''],
      email: [''],
      password: ['',
        [
          Validators.required
        ]
      ]
    });
  }

  emailLogin() {
    this.isMobileLogin = false;
    this.loginForm.get('mobile')?.setValue('');
  }

  mobileLogin() {
    this.isMobileLogin = true;
    this.loginForm.get('email')?.setValue(''); 
  }

  login() {
    localStorage.removeItem('access_token');
    if(this.loginForm?.valid) {
      this.model = Object.assign({}, this.loginForm.value);
      if(this.model.mobile != '' || this.model.email != '')
      this.authService.login(this.model)
      .subscribe(() => 
        this.router.navigate(['/dashboard'])
      );
    } else {
      console.log('Data Incomplete');
      this.router.navigate(['/login'])
    }
  }

  get loginName() {
    return this.loginForm.controls['name'];
  }

  get loginEmail() {
    return this.loginForm.controls['email'];
  }

  get loginPassword() {
    return this.loginForm.controls['password'];
  }

}
