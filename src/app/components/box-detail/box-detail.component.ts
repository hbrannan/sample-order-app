import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoxService } from '../../box.service';
import { RestfullService } from '../../restfull.service';
import { Box } from '../box/box';
import { Order } from './order';

@Component ({
  selector: 'box-detail',
  templateUrl:'./box-detail.component.html',
  providers: [RestfullService]
})

export class BoxDetailComponent {
  @Input() box: Box;

  constructor(private restfullService:RestfullService){}

  getData: string;
  postData: string;

  materials = ['str0', 'str01', 'str2', 'str', 'str'];
  dimensions = ['str0', 'str01', 'str2', 'str', 'str'];
  shippingOptions = ['Fedex Ground', 'First Class','Priority'];

  submitted = false;

  model = new Order('str', 'str', 9, 'str', 'str', 'str', 'str', 'str', 'str');

  onSubmit() : void {
    this.submitted = true;
    this.restfullService.getCurrentTime()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log('Finished')
      );
    this.restfullService.validate(JSON.stringify(this.model))
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log('Finished')
      );
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

