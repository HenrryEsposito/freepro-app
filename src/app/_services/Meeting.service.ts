import { Meeting } from './../_models/Meeting';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  baseUrl = 'http://localhost:5000/api/meeting';

  constructor(private http: HttpClient) { }

  getAllMeetings(): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(this.baseUrl);
  }
  getMeetingsById(id: number): Observable<Meeting> {
    return this.http.get<Meeting>(`${this.baseUrl}/${id}`);
  }
  getMeetingsByTheme(theme: string): Observable<Meeting[]> {
    return this.http.get<Meeting[]>(`${this.baseUrl}/getByTheme/${theme}`);
  }
}
