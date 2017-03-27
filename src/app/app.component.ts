import { Component, OnInit } from '@angular/core';
import { Box } from './components/box/box';
import { BoxService } from './box.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BoxService]
})

export class AppComponent implements OnInit {
  title = 'Arka Customer Order Form';
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

