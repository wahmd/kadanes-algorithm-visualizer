import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  array: number[] = [];
  current: number = 0;
  lines: number = 8;
  generator: any = this.executeLine(this.array);
  maxCurrent: number = 0;
  maxGlobal: number = 0;


  constructor(public appService: AppService) {}

  ngOnInit(): void {
    this.populateRandomArray();
    this.generator = this.executeLine(this.array);
  }

  reset = () => {
    this.maxCurrent = 0;
    this.maxGlobal = 0;
    this.generator = this.executeLine(this.array);
    this.current = 0;
  };

  populateRandomArray = () => {
    this.reset();
    this.array = [];
    const len = Math.floor(Math.random() * (20 - 5) + 5);
    let i = len;
    do {
      this.array.push(Math.floor(Math.random() * (30 - -30) + -30));
      i--;
    } while (i > 0);
  };

  increment = () => {
    this.generator.next();
  };

  increaseCurrentLine = () => {
    if (this.current <= this.lines) {
      this.current++;
    }
  }

  *executeLine(nums: number[]) {
    this.appService.setI(0);
    this.increaseCurrentLine();
    yield;
    this.increaseCurrentLine();
    this.maxCurrent = nums[0];
    yield;
    this.increaseCurrentLine();
    this.maxGlobal = nums[0];
    yield;
    for (let i = 1; i < nums.length; i++) {
      this.appService.setI(i);
      if (i != 1) {
        this.current = 3; // reset to first line in case loop reiterates
      } else {
      }
      yield;
      this.increaseCurrentLine();
      yield;
      this.increaseCurrentLine();
      this.maxCurrent = Math.max(nums[i], this.maxCurrent + nums[i]);
      yield;
      this.increaseCurrentLine();
      if (this.maxCurrent > this.maxGlobal) {
        yield;
        console.log('haloo3')
        this.maxGlobal = this.maxCurrent;
      }
    }
    this.increaseCurrentLine();
    yield;
    this.increaseCurrentLine();
    this.appService.setI(-1);
    return this.maxGlobal;
  }
}

