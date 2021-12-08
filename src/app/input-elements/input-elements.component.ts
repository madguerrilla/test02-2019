import { Component, OnInit } from '@angular/core';
import { InputElements } from '../input-elements';

const inputsData = [{
  "id": "stationery-input",
  "name": "Stationery",
  "type": "number"
},
{
  "id": "food-input",
  "name": "Food",
  "type": "number"
}
];

var inputFormDataArr = [];
for(let inputData of inputsData) {
  inputFormDataArr.push(new InputElements(inputData.id, inputData.name, inputData.type))
}


@Component({
  selector: 'app-input-elements',
  templateUrl: './input-elements.component.html',
  styleUrls: ['./input-elements.component.scss']
})

export class InputElementsComponent implements OnInit {
  inputFormData = inputFormDataArr;
  ngOnInit(): void {}
}
