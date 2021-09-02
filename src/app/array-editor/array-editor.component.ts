import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-array-editor',
  templateUrl: './array-editor.component.html',
  styleUrls: ['./array-editor.component.scss']
})
export class ArrayEditorComponent implements OnInit {

  array = new FormGroup({
    length: new FormControl(0)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
