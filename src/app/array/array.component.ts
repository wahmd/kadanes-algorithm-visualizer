import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {
  @Input() array: number[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
