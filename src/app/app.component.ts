import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  paragrafStatusOn: boolean = true;

  paragrafOFF() {
    this.paragrafStatusOn = !this.paragrafStatusOn;
  }
}
