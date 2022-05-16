import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstname = 'Coco';

  constructor() {
    setTimeout(() => {
      this.firstname = 'Jaco';
    }, 3000);
  }
}