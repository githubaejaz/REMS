import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, RequiredValidator, Validators, ValidationErrors, AbstractControl, FormBuilder} from '@angular/forms'
import { User } from 'src/app/Models/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit{

  registerationForm: FormGroup;
  user : User;
  userSubmitted: boolean = false;
  constructor(private fb: FormBuilder, private users: UserService,
              private alertify: AlertifyService){}


  ngOnInit(): void {

    this.registerationForm = new FormGroup(
      {
        userName : new FormControl(null,Validators.required),
        email : new FormControl(null,[Validators.required,  Validators.email]),
        password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
        confirmPassword : new FormControl(null,Validators.required),
        mobile : new FormControl(null,[Validators.required, Validators.maxLength(10)])
      }, this.passwordMatchingValidator
    )

    //this.createRegistrationForm();

  }

  createRegistrationForm(){
    this.registerationForm = this.fb.group({
      userName : [null,Validators.required],
        email : [null,[Validators.required,  Validators.email]],
        password : [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword : [null,Validators.required],
        mobile : [null,[Validators.required, Validators.maxLength(10)]]
    }, {Validators: this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  userData() : User{
    return this.user = {
      userName: this.userName.value,
      email: this.userName.value,
      password: this.userName.value,
      mobile: this.userName.value
    }
  }

  get userName ()
  {
    return this.registerationForm.get('userName') as FormControl
  }
  get email ()
  {
    return this.registerationForm.get('email') as FormControl
  }
  get password ()
  {
    return this.registerationForm.get('password') as FormControl
  }
  get confirmPassword ()
  {
    return this.registerationForm.get('confirmPassword') as FormControl
  }
  get mobile ()
  {
    return this.registerationForm.get('mobile') as FormControl
  }

  onSubmit() {
    this.userSubmitted = true;
    console.log(this.registerationForm);
    if(this.registerationForm.valid)
    {
      //this.user = Object.assign(this.user, this.registerationForm.value);
      this.users.addUser(this.userData());
      this.alertify.success("Congrats, You are successfully registered");
      //alert("You are successfully registered");
      this.registerationForm.reset();
      this.userSubmitted = false;
    }
    else
    {
      this.alertify.error("Error, Please validate the error(s)");
    }
  }

  onReset() {
    console.log('Reset CLicked');
  }
}
