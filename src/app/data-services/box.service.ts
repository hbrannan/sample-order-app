import { Injectable } from '@angular/core';
import { Box } from '../components/box/box'
import { BOXES } from './mock-box-data';

@Injectable()
export class BoxService {
  getBoxes(): Promise<Box[]> {
    return Promise.resolve(BOXES);
  }
}
