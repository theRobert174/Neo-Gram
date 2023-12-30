import { Component, OnInit, inject } from '@angular/core';
import { TitleService } from '../../services/title.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  private router = inject(Router);

  private titleService = inject(TitleService);

  public credentials = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
    this.titleService.setTitle('Login');
  }

  login() {
    // this.authService.login(this.credentials);
  }

  register() {
    // this.navCtrl.push(RegisterPage);
    this.router.navigateByUrl('auth/signin');
  }

}
