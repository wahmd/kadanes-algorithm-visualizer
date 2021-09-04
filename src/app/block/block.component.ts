import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss'],
})
export class BlockComponent implements OnInit {
  @Input() value: number | undefined;
  @Input() index: any;
  @Input() len: number = 0;
  active: number = 0; 
  constructor(private appService: AppService) { }
  
  ngOnInit(): void {
    console.log('console.',this.index, this.len)
    this.appService.getI().subscribe((value) => {
      this.active = value;
    });
  }
}
