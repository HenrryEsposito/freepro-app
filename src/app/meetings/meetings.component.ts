import { Meeting } from './../_models/Meeting';
import { MeetingService } from './../_services/Meeting.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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
  modalRef!: BsModalRef;

  constructor(
    private meetingService: MeetingService,
    private modalService: BsModalService
  ) { }

  get filteredMeetings(): Meeting[] {
    return this.meetings.filter(
      (searchString: { theme: string; }) => searchString.theme.toLocaleLowerCase().indexOf(this.searchString) !== -1
    );
  }

  opensModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
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
