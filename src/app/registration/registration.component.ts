import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  myForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder,private router: Router) {
    this.myForm = formBuilder.group({
      'name': ['',[Validators.required]],
      'secondName': ['',[Validators.required]],
      'email': ['',[Validators.required]],
      'password': ['',[Validators.required]]

    })
  }

  ngOnInit(): void { }

  submitRegistration () {
    this.authService.registration(this.myForm.value).subscribe({
      next: (data) => {
        this.router.navigateByUrl('login').then();
        alert('Регистрация прошла успешно!')
      },
      error: () => {alert("Error")},
      complete: () => {{}}
    })
  }
}
