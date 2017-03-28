import { Component, Input, OnInit } from '@angular/core';
import { Box } from '../box/box';
import { BoxService } from '../../box.service';

@Component ({
  selector: 'box-material',
  templateUrl:'./box-material.component.html'
})

export class BoxMaterialComponent {
  @Input() material: Array<string>;
}
