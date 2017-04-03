import { NgModule } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { BoxDetailComponent } from './components/box-detail/box-detail.component'
import { BoxService } from './data-services/box.service';
import { RestfullService } from './data-services/restfull.service';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [BoxComponent, BoxDetailComponent ],
  exports: []
})

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
           RouterTestingModule.withRoutes([{path: 'types', component: AppComponent}])
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Arka Customer Order Form'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Arka Custom Packaging Order Form');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Arka Custom Packaging Order Form');
  }));

  it('should render a router link', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').classList).toContain('cta');
  }));
});
