import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  _filteredMeetings: any = [];

  searchString = '';
  meetings: any = [];
  imgWidth = 50;
  imgMargin = 2;
  showImages = false;

  constructor(private http: HttpClient) { }


  get filteredMeetings(): any {
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
    this.meetings = this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.meetings = response;
    }, error => {
      console.log(error);
    });
  }
}
