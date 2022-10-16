import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Presentacion', url: '/presentacion', icon: 'home' },
    { title: 'Tabla', url: '/tabla', icon: 'calculator' },
    { title: 'No. Mayor', url: '/mayor', icon: 'arrow-up' },
  ];
  constructor() {}
}
