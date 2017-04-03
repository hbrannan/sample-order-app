import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BoxService } from '../../box.service';
import { RestfullService } from '../../restfull.service';
import { Box } from '../box/box';
import { Order } from './order';

@Component ({
  selector: 'box-detail',
  templateUrl:'./box-detail.component.html',
  styleUrls: ['./box-detail.component.css'],
  providers: [RestfullService]
})

export class BoxDetailComponent {
  @Input() box: Box;

  constructor(private restfullService:RestfullService){}

  getData: string;
  postData: string;
  responseMessage: string;

  materials = ['TODO', 'fetch', 'from', 'dataSource', 'onInit'];
  dimensions = ['TODO', 'fetch', 'from', 'dataSource', 'onInit'];
  shippingOptions = ['Fedex Ground', 'First Class','Priority', 'TODO', 'fetch', 'from', 'dataSource', 'onInit'];

  submitted = false;

  model = new Order('', '', 9, '', '', '', '', '', '');

  onSubmit() : void {
    this.submitted = true;
    this.restfullService.getCurrentTime()
      .subscribe(
        data => {
          this.getData = JSON.stringify(data);
          this.responseMessage = 'Thank you! Your order has been submitted.'
        },
        error => alert(error),
        () => console.log('Finished')
      );
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}

