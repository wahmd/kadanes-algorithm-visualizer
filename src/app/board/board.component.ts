import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  array: number[] | undefined;
  constructor() {}

  ngOnInit(): void { }
  
  populateRandomArray = () => {
    this.array = [];
    const len = Math.floor(Math.random() * (10 - 2) + 2);
    let i = len;
    do {
      this.array.push(Math.floor(Math.random() * (30 - (-30)) + (-30)))
      i--;
    } while (i>0)
  }
}
