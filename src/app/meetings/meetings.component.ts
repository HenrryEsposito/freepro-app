import { Meeting } from './../_models/Meeting';
import { MeetingService } from './../_services/Meeting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  // tslint:disable-next-line: variable-name
  _filteredMeetings!: Meeting[];

  searchString = '';
  meetings!: Meeting[];
  imgWidth = 50;
  imgMargin = 2;
  showImages = false;

  constructor(private meetingService: MeetingService) { }


  get filteredMeetings(): Meeting[] {
    return this.meetings.filter(
      (searchString: { theme: string; }) => searchString.theme.toLocaleLowerCase().indexOf(this.searchString) !== -1
    );
  }

  ngOnInit(): void {
    this.getMeetings();
  }

  toggleImg(): void {
    this.showImages = !this.showImages;
  }

  getMeetings(): void {
    this.meetingService.getAllMeetings().subscribe(
    (_meetings: Meeting[]) => {
      this.meetings = _meetings;
    }, error => {
      console.log(error);
    });
  }
}
