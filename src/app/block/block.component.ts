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
  active: number = 0; 
  constructor(private appService: AppService) { }
  
  ngOnInit(): void {
    
    this.appService.getI().subscribe((value) => {
      this.active = value;
    });
  }
}
