import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: String = 'Tour of Heroes';

  constructor() {}

  ngOnInit(): void {  }
}
