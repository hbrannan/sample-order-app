import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BoxComponent } from './components/box/box.component';
import { BoxDetailComponent } from './components/box-detail/box-detail.component'
import { BoxService } from './data-services/box.service';
import { RestfullService } from './data-services/restfull.service';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'types',
        component: BoxComponent
      }
    ])
  ],
  providers: [RestfullService, BoxService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
