import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ClientMeetingsComponent } from './client-meetings/client-meetings.component';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { MeetingService } from './meeting.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientMeetingsComponent,
    ClientCreationComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, 
    AppRoutingModule
  ],
  providers: [MeetingService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
