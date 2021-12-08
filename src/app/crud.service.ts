import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface items {
  name: string;
}

export interface groups {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  itemsUrl = '/api/items';
  groupsUrl = '/api/groups';

  constructor(private httpClient: HttpClient) { }


  private items: items[];
  private groups: groups[];
  private dataItems: dataItems[];
  private dataGroupStationery: dataGroupStationery[];
  private dataGroupFood: dataGroupFood[];

  public getItems(): Observable<items[]> {
    return this.httpClient
      .get<items[]>(this.itemsUrl)
      .map(response => {
        console.log(response);
        this.items = response;
        return response;
      })
  }

  public getgroups(): Observable<groups[]> {
    return this.httpClient
      .get<groups[]>(this.groupsUrl)
      .map(response => {
        console.log(response);
        this.groups = response;
        return response;
      })
  }

  public getAllData() {
    const dataItems = [];
    const dataGroupStationery = [];
    const dataGroupFood = [];

    this.getItems().subscribe(
      data => {
        this.items = data;
        for (let item of this.items) {
          dataItems.push(this.items);
        }
        this.dataItems = dataItems;
        this.getgroups().subscribe(
          data => {
            this.groups = data.groups;
            for (let stationery of data.groups.stationery) {
              dataGroupStationery.push(stationery);
            }
            this.dataGroupStationery = dataGroupStationery;
            for (let food of data.groups.food) {
              dataGroupFood.push(food);
            }
            this.dataGroupFood = dataGroupFood;
            let stationeryValue = 0;
            for (let obj of dataGroupStationery) {
              for (let itemObj of this.items) {
                if (itemObj.name == obj) stationeryValue += itemObj.value
              }
            }
            document.querySelector('#stationery-input').value = stationeryValue;
            let foodValue = 0;
            for (let obj of dataGroupFood) {
              for (let itemObj of this.items) {
                if (itemObj.name == obj) foodValue += itemObj.value
              }
            }
            document.querySelector('#food-input').value = foodValue;
          }
        )
      }
    )
  }

  public updateItems(stationery, food) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const firstStationery = this.dataGroupStationery[0];
    const firstFood = this.dataGroupFood[0];

    for (let updateDataItem of this.dataItems[0]) {
      this.httpClient.put(`${this.itemsUrl}/${updateDataItem.id}`, { "id": updateDataItem.id, "name": updateDataItem.name, "value": 0 }, { headers }).subscribe();
    }

    for (let updateDataItem of this.dataItems[0]) {
      switch (firstStationery === updateDataItem.name) {
        case true:
          this.httpClient.put(`${this.itemsUrl}/${updateDataItem.id}`, { "id": updateDataItem.id, "name": updateDataItem.name, "value": parseInt(stationery) }, { headers }).subscribe(
            val => {
              console.log('Stationery updated -', updateDataItem.name, 'with the value of', stationery);
            }
          );
          break;
      }
      switch (firstFood === updateDataItem.name) {
        case true:
          this.httpClient.put(`${this.itemsUrl}/${updateDataItem.id}`, { "id": updateDataItem.id, "name": updateDataItem.name, "value": parseInt(food) }, { headers }).subscribe(
            val => {
              console.log('Food updated -', updateDataItem.name, 'with the value of', food);
            }
          );
          break;
      }
    }
    this.getAllData()
  }

}
