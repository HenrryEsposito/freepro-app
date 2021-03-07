import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  meetings: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getMeetings();
  }

  getMeetings(): void {
    this.meetings = this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.meetings = response;
    }, error => {
      console.log(error);
    });
  }
}
