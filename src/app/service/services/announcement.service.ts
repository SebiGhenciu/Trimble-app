import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from 'src/app/announcement';

@Injectable({
  providedIn: 'root',
})
export class AnnouncementService {
  constructor() {}

  serviceCall() {
    console.log('Service was called');
  }

  announcements: Announcement[] = [
    {
      title: 'Course.',
      message: 'Course for today will start at 13:00',
      author: ' orice',
      category: { id: 1, name: 'name1' },
    },

    {
      title: 'General.',
      message: 'General for today will start at 15:00',
      author: 'Tom',
      category: { id: 2, name: 'name2' },
    },

    {
      title: 'Laboratory',
      message: 'Laboratory will not be avalabile today',
      author: 'Mike',
      category: { id: 3, name: 'name3' },
    },
  ];

  getAnnouncements(): Observable<Announcement[]> {
    return new Observable<Announcement[]>((observer) => {
      observer.next(this.announcements);
      observer.complete();
    });
  }

  addAnnouncement(announcement: Announcement) {
    this.announcements.push(announcement);
  }
}
