import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import { CustomerRegister } from '../../utils/_entities/customer/customer-register';
import { Otp } from '../../utils/_entities/customer/otp';
import { Country } from '../../utils/_entities/master-data/country';
import { CountryList } from '../../utils/_entities/master-data/country-list';
import { AuthService } from '../../services/auth.service';
import { CustomerService } from '../../services/customer.service';
import { createMobileNumberValidator } from '../../utils/_validators/register/mobile-number-validator';
import { createPasswordStrengthValidator } from '../../utils/_validators/register/password-strength-validator';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.sass']
})
export class CustomerRegisterComponent implements OnInit, OnDestroy {
  public model: any; public countryList?: CountryList; public countries: Country[] = [];

  public customer?: CustomerRegister;

  public registerForm!: FormGroup;

  private respon: any;

  buttonDisabled: boolean = false;

  verifyDisabled: boolean = false;
  
  login: any;

  mobileNumber: string = '';

  // public otpObj:Partial<Otp> = {};
   otpObj: Otp = {
    otpCode: '',
    expireTimeMin: 0,
    isRegister: true
  };
  
  btnOtp = "GET OTP"; 

  isVerifySuccess:boolean = false;

  btnVerify = "Verify";
  
  private subscription!: Subscription;

  public countdownseconds = 0;

  public seconds = 60;

  otpverify = "";

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    localStorage.removeItem('access_token');
    this.createRegisterForm();
    this.customerOtp.setErrors({'unfillotp': true});
    this.getCountryList();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      name: ['', 
        [
          Validators.required, Validators.minLength(4)
        ]
      ],
      password: ['', 
        [
          Validators.required, 
          Validators.minLength(6),
          createPasswordStrengthValidator()
        ]
      ],
      gender: ['', Validators.required],
      email: ['', 
        [
          Validators.required, 
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
        ]
      ],
      mobile: ['', 
        [
          Validators.required, 
          Validators.minLength(6), 
          createMobileNumberValidator()
        ]
      ],
      otpcode: [''],
      country: ['']
    });
  }

  /** Customer Registration Case */
  customerRegister() {
    if(this.registerForm?.valid) {
      this.model = Object.assign({}, this.registerForm.value);
      this.model.mobile = this.mobileNumber;
      this.customerService.customerRegister(this.model)
        .subscribe(res => {
          this.customer = res.data;
          if(this.customer && this.customer != null ) {
            this.login = this.customer;
            this.login.password = this.model.password;
            this.authService.login(this.login)
              .subscribe(() => 
                this.router.navigate(['/'])
              )
          } else {
            this.router.navigate(['/login']);
          }
        });
    }
  }

  backToMain() {
    this.router.navigate(['/']);
  }

  /** OTP Case Start */
  verify() {
    if(!this.customerMobile.errors?.['mobileInvalid'] && this.registerForm.get('country')?.value!=''){
      let otptoverify = this.registerForm.get('otpcode')?.value;
      let mobile = this.registerForm.get('mobile')?.value;
      let countryCode = this.registerForm.get('country')?.value;
      countryCode = countryCode.substring(1, countryCode.length);
      mobile = countryCode + '9' + mobile;
      this.customerService.otpVerify(mobile, otptoverify).subscribe(res => {
        this.respon = res;
        if(this.respon.status === 'SUCCESS') {
          this.mobileNumber = mobile;
          this.customerOtp.setErrors(null);
          this.registerForm.get('mobile')?.disable();
          this.unSubscribeOtp();
        } else{
          this.customerOtp.setErrors({'incorrect': true});
        }
      })
    } 
  }



  getotp(mobile: string) {
    if(mobile != null && mobile != '' && this.registerForm.get('country')?.value != '') {
      let countryCode = this.registerForm.get('country')?.value;
      countryCode = countryCode.substring(1, countryCode.length) + '9';
      mobile = countryCode + mobile;
      this.customerService.getOtp(mobile).subscribe(
        res => {
          this.otpObj = res.data;
          if(this.otpObj != null && this.otpObj != undefined) {
            this.seconds = this.otpObj.expireTimeMin * 60;
            this.buttonDisabled = true;
          } else {
            this.seconds = 60;
          }
          this.getCountDown();
          // if isRegister true send customer to register page.

          // else send customer to continue register.  
        }
      );
    } 
  }

  private getTimeDifference () {
    this.countdownseconds = Math.floor((this.seconds));
    if(this.seconds > 0) {
      this.btnOtp = String(this.countdownseconds);
      this.seconds = this.seconds - 1;
    } else {
      this.btnOtp = "RESEND OTP";
      this.buttonDisabled = false;
      this.subscription.unsubscribe();
    }
  }

  private unSubscribeOtp() {
    this.verifyDisabled = true;
    this.btnVerify = "Success"
    this.subscription.unsubscribe();
    this.isVerifySuccess = true;
  }

  getCountDown() {
    this.subscription = interval(1000)
      .subscribe(x => { this.getTimeDifference();});
  }
  /** OTP Case End */

  /** Country Code Start */
  getCountryList(): void {
    this.customerService.getCountryList()
      .subscribe(
        res => {
          this.countries = res.data.countryList;
          console.log(this.countries[0].country);
        }
      );
  }

  forgetPassword() {
    this.customerService.forgetPassword()
      .subscribe(res => this.login = res);
  }

  trackCountry(index: number,country: Country){
    return country ? country.countryCode : undefined;
  }

  /** Country Code End */

  /** Form Control Start */
  get register(){
    return this.registerForm.controls;
  }

  get customerName() {
    return this.registerForm.controls['name'];
  }

  get customerPassword() {
    return this.registerForm.controls['password'];
  }

  get customerEmail() {
    return this.registerForm.controls['email'];
  }

  get customerMobile() {
    return this.registerForm.controls['mobile'];
  }

  get customerGender() {
    return this.registerForm.controls['gender'];
  }

  get customerOtp() {
    return this.registerForm.controls['otpcode'];
  }
  /** Form Control End */

}
