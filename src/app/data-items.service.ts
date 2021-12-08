import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})

export class DataItemsService {

  constructor() { }
  createDb() {

    let items = [
      { "id": "1", "name": "pens", "value": 100 },
      { "id": "2", "name": "sharpeners", "value": 32 },
      { "id": "3", "name": "pencils", "value": 76 },
      { "id": "4", "name": "fish", "value": 12 },
      { "id": "5", "name": "chicken", "value": 13 },
      { "id": "6", "name": "veg", "value": 43 },
      { "id": "7", "name": "chocolate", "value": 4 }
    ];

    let groups = {
      "groups": {
        "stationery": ["pens", "sharpeners", "pencils"],
        "food": ["fish", "chicken", "veg", "chocolate"]
      }
    };

    return { items, groups };
  }
}
