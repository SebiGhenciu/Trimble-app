import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/announcement';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor(private httpClient: HttpClient) {}

  serviceCall() {
    console.log('Service was called');
  }
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  baseURL =
    'https://newsapi20221108120432.azurewebsites.net/api/Announcements/';

  getAnnouncements(): Observable<Announcement[]> {
    return this.httpClient.get<Announcement[]>(this.baseURL);
  }

  addAnnouncement(announcement: Announcement) {
    return this.httpClient.post<Announcement>(this.baseURL, announcement);
  }

  deleteAnnouncement(id: string) {
    return this.httpClient.delete(this.baseURL + id, this.httpOptions);
  }

  editAnnouncement(announcement: Announcement) {
    return this.httpClient.put(
      this.baseURL + announcement.id,
      announcement,
      this.httpOptions
    );
  }
}
