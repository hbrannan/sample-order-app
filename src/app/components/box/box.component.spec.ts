import { TestBed, async } from '@angular/core/testing';

import { BoxComponent } from './box.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoxComponent
      ],
    }).compileComponents();
  }));

  it('should create the box component', async(() => {
    const fixture = TestBed.createComponent(BoxComponent);
    const box = fixture.debugElement.componentInstance;
    expect(box).toBeTruthy();
  }));

});
