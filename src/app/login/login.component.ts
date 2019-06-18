import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { MD5 } from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userform: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    passWord: new FormControl('', [Validators.required]),
    remember: new FormControl(false)
  });
  constructor(
    private loginSvr: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  submitForm(event) {
    console.log(MD5(this.userform.value.passWord.trim()).toString());
    this.loginSvr.login('login', {
      userName: this.userform.value.userName.trim(),
      passWord: MD5(this.userform.value.passWord.trim()).toString()
    }).subscribe(res => {
      console.log(res);
      if (res.code === '1') {
        this.router.navigateByUrl('/');
      }
    });
  }

}
