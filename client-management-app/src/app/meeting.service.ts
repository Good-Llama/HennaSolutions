// meeting.service.ts
import { Injectable } from '@angular/core';
import { Meeting } from './meeting.model'; // Adjust the import path as needed

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  private meetings: Meeting[] = []; // Assuming meetings are stored in an array

  constructor() {
    // Initialize meetings array or fetch data from external source
  }

  // Method to retrieve meetings
  getMeetings(): Meeting[] {
    return this.meetings;
  }
  
  // Additional methods for CRUD operations can be added here
}