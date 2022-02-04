import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'painel4p';

  constructor(private metaService:Meta){
    this.metaService.addTag({name:'viewport',content:"width=device-width, initial-scale=1.0"});
  }
}
