import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleService } from '../services/title.service';
import { Animation, AnimationController, IonContent, IonList, ViewDidEnter } from '@ionic/angular';

@Component({
  selector: 'auth-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit, ViewDidEnter {

  // private aniCtrl = inject(AnimationController);
  // private route = inject(ActivatedRoute);
  // private animation!: Animation;
  private titleService = inject(TitleService);

  public title: string = 'Cargando...';

  constructor() { }

  ngOnInit() {
    this.titleService.title$.subscribe( newTitle => this.title = newTitle);
  }

  ionViewDidEnter(): void {
  }

}
