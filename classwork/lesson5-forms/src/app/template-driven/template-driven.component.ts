import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  public name: string;

  constructor() { }

  dosomething(form)
  {
    debugger
  }

  ngOnInit() {
    setTimeout(() => {
      this.name = 'Bob'
    }, 2000);
  }

}
