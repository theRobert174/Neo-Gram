import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { IonicModule } from '@ionic/angular';
import { LoginMethodsComponent } from './components/login-methods/login-methods.component';
import { PostCardComponent } from './components/post-card/post-card.component';



@NgModule({
  declarations: [
    CircleButtonComponent,
    LoginMethodsComponent,
    PostCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    CircleButtonComponent,
    LoginMethodsComponent,
    PostCardComponent,
  ]
})
export class SharedModule { }
