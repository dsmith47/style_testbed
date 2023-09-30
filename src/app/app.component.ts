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
  
  box1StyleColor:string = '#FFFF00';

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

  update(colorString:string) {
    if (colorString.length == 7) {
      this.box1StyleColor = colorString;
    }
  }

  box1StyleObject(): Object {
    return {
    }
  }
}
