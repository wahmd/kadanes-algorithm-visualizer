import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-panel',
  templateUrl: './display-panel.component.html',
  styleUrls: ['./display-panel.component.scss'],
})
export class DisplayPanelComponent implements OnInit {
  @Input() maxCurrent: number | undefined;
  @Input() maxGlobal: number | undefined;
  @Input() current: number = 0;
  @Input() nextBtn: boolean = true;
  @Input() autoBtn: boolean = true;
  @Input() generateBtn: boolean = true;
  @Input() speed: number = 500;
  @Output() nextClicked = new EventEmitter();
  @Output() autoClicked = new EventEmitter();
  @Output() generateClicked = new EventEmitter();
  @Output() speedUpdated = new EventEmitter();

  constructor() {}
  ngOnInit(): void {
  }

  emitNextClicked = () => this.nextClicked.emit(true);
  emitAutoPlay = () => this.autoClicked.emit(true);
  emitGenerate = () => this.generateClicked.emit(true);
  emitSpeedUpdate = (e:any) => this.speedUpdated.emit(e);

}
