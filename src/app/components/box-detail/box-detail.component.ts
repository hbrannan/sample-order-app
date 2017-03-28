import { Component, Input, OnInit } from '@angular/core';
import { Box } from '../box/box';
import { BoxService } from '../../box.service';

@Component ({
  selector: 'box-detail',
  templateUrl:'./box-detail.component.html'
})

export class BoxDetailComponent {
  @Input() box: Box;
}

