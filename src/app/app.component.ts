import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverStatus = true;
  clicks = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? false : true;
  }

  onCreateServer() {
    this.serverStatus = !this.serverStatus;
    this.clicks.push(this.clicks.length + 1);
    console.log(this.clicks.length);
    return this.serverStatus;
  }
}
