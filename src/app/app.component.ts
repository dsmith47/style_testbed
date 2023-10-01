import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'style-picker';

  navBackgroundColor:string = 'blue';
  navTextColor:string = 'white';
  
  colors:Map<string,string> = new Map<string, string>();

  ngOnInit() {
    this.navBackgroundColor = 'blue';
    this.navTextColor = 'white';

    this.colors.set('box1', '#199900')
    this.colors.set('box2', '#FFFFFF')
    this.colors.set('box3', '#F0F0F0')
    this.colors.set('box4', '#FFFFFF')
    this.colors.set('box5', '#000000')
    this.colors.set('box6', '#FFFFFF')
    //this.colors.set('box6', '#0F0F0F')
    this.colors.set('box7', '#000228')
    //this.colors.set('box7', '#000000')
    //this.colors.set('box7', '#000FFF')
  }

  navStyleObject(): Object {
    return {
      'background-color': 'blue',
      'color': 'white'
    }
  }

  hnavStyle(): Object {
    return {
      'background-color': this.colors.get('box1'),
      'color': this.colors.get('box2')
    }
  }

  fullPageStyle(): Object {
    return {
      'background-color': this.colors.get('box3')
    }
  }

  vnavStyle(): Object {
    return {
      'background-color': this.colors.get('box4'),
      'color': this.colors.get('box5')
    }
  }

  postStyle(): Object {
    return {
      'background-color': this.colors.get('box6'),
      'color': this.colors.get('box7')
    }
  }

  update(keyString:string, colorString:string) {
    if (colorString.length == 7) {
      this.colors.set(keyString, colorString);
    }
  }

  box1StyleObject(): Object {
    return {
    }
  }
}
