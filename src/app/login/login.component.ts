import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {UserInfo} from "../models/userInfo";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.myForm = formBuilder.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  submit() {
    this.authService.login(this.myForm.value).subscribe({
        next: (data) => {
          const user = UserInfo.getInstance();
          user.email = this.myForm.value.email;
          user.token = data.token;
          this.router.navigateByUrl('dashboard').then();
        },
        error: () => {alert("Error")},
        complete: () => {{}}
    })
  }

  registration() {
    this.router.navigateByUrl('registration').then();
  }


}
