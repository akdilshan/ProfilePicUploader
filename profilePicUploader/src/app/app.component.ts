import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profilePicUploader';
  public editEnabled = true;
  public picurl: string;

  constructor() {}

  public clear() {
    this.picurl = '';
  }
}
