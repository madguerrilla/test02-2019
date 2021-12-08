import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from './crud.service';

export interface items {
  name: string;
}

export interface groups {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'DeloitteTest';

  private items: items[];
  private groups: groups[];
  private dataResults: dataResults[];

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.getAllData();
  }

  update(){
    this.crudService.updateItems(document.querySelector('#stationery-input').value, document.querySelector('#food-input').value )
  }
}
