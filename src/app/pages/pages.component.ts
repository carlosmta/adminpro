import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  cadena: string;

  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
