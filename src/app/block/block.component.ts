import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() value: number | undefined;
  @Input() index: number | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log('index: ', this.index);
    console.log('value: ', this.value);

  }

}
