import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

  array: number[] = [1,-2,4,6,2,-1,10];
  constructor() { }

  ngOnInit(): void {
  }

}
