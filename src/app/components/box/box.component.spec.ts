import { NgModule } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { BoxDetailComponent } from '../box-detail/box-detail.component';
import { BoxComponent } from './box.component';

describe('BoxComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoxComponent
      ]
    }).compileComponents();
  }));
});
