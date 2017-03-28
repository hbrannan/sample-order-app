import { Component, OnInit } from '@angular/core';
import { Box } from './box';
import { BoxService } from '../../box.service';

@Component({
  selector: 'order-form-boxes',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  providers: [BoxService]
})

export class BoxComponent implements OnInit {
  boxes : Box[];
  selectedBox: Box;

  constructor(private boxService: BoxService) {}

  getBoxes(): void {
    this.boxService.getBoxes().then(boxes => this.boxes = boxes);
  }

  ngOnInit(): void {
    this.getBoxes();
  }

  onSelect(box: Box) : void {
    this.selectedBox = box;
  }
}
