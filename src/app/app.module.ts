import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ArrayEditorComponent } from './array-editor/array-editor.component';
import { ArrayComponent } from './array/array.component';
import { BlockComponent } from './block/block.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DisplayPanelComponent } from './display-panel/display-panel.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { ProblemComponent } from './problem/problem.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    ArrayEditorComponent,
    ArrayComponent,
    BlockComponent,
    DisplayPanelComponent,
    ProblemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatSliderModule,
    RouterModule.forRoot([
      { path: 'visualizer', component: BoardComponent },
      { path: 'problem', component: ProblemComponent },
      { path: '', redirectTo: '/problem', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
