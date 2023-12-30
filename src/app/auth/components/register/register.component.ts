import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent  implements OnInit {

  private router = inject(Router);

  private titleService = inject(TitleService);

  public credentials = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
    this.titleService.setTitle('Register');
  }

  login() {
    // this.authService.login(this.credentials);
    this.router.navigateByUrl('auth/login');
  }

  register() {
    // this.navCtrl.push(RegisterPage);
  }

}
