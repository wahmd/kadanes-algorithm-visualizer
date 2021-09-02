import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-panel',
  templateUrl: './display-panel.component.html',
  styleUrls: ['./display-panel.component.scss']
})
export class DisplayPanelComponent implements OnInit {

  @Input() maxCurrent: number | undefined;
  @Input() maxGlobal: number | undefined;


  constructor() { }

  ngOnInit(): void {
  }

}
