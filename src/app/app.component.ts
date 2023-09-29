import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'style-picker';

  navBackgroundColor:string = 'blue';
  navTextColor:string = 'white';

  ngOnInit() {
    this.navBackgroundColor = 'blue';
    this.navTextColor = 'white';
  }

  onTextButtonClick() {
    this.navBackgroundColor = 'red';
    this.navTextColor = 'black';
  }

  navStyleObject(): Object {
    return {
      'background-color': 'blue',
      'color': 'white'
    }
  }
}
