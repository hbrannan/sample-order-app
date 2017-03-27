import { Component, Input } from '@angular/core';
import { Box } from './box';

@Component ({
  selector: 'box-detail',
  template: `
    <div *ngIf="box">
      <h2>{{box.material}} details!</h2>
      <div><label>id: </label>{{box.id}}</div>
      <div>
        <label>material: </label>
        <input [(ngModel)]="box.material" placeholder="material"/>
      </div>
    </div>
    `
})
export class BoxDetailComponent {
  @Input() box: Box;
}
