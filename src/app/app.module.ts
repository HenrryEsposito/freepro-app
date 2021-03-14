import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MeetingService } from './_services/Meeting.service';

import { AppComponent } from './app.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { NavComponent } from './nav/nav.component';

import { DateTimeFormatPipePipe } from './_helps/DateTimeFormatPipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MeetingsComponent,
    NavComponent,
    DateTimeFormatPipePipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [
    MeetingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
