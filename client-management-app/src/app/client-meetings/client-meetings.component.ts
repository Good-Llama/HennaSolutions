import { Component } from '@angular/core';
import { MeetingService } from '../meeting.service';
import { Meeting } from '../meeting.model'

@Component({
  selector: 'app-client-meetings',
  templateUrl: './client-meetings.component.html',
  styleUrls: ['./client-meetings.component.css']
})
export class ClientMeetingsComponent {
  meetings: Meeting[];

  constructor(private meetingService: MeetingService) {
    this.meetings = this.meetingService.getMeetings(); // Assuming you have a method to fetch meetings
  }
}
