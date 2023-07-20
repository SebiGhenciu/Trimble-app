import { Component } from '@angular/core';
import { Category } from '../category';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { AnnouncementService } from '../service/services/announcement.service';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss'],
})
export class AddAnnouncementFormComponent {
  title: string;
  author: string;
  message: string;
  selected: number;

  constructor(private announcementService: AnnouncementService) {}

  categories: Category[] = [
    {
      id: 1,
      name: 'Course',
    },

    {
      id: 2,
      name: 'General',
    },

    {
      id: 3,
      name: 'Laboratory',
    },
  ];

  AddAnnouncement() {
    const announcement: Announcement = {
      title: this.title,
      message: this.message,
      author: this.author,
      category: this.categories.find((c) => c.id === this.selected),
    };

    console.log('title', this.title);
    console.log('author', this.author);
    console.log('message', this.message);
    console.log('category', this.selected);
    this.announcementService.addAnnouncement(announcement);
  }

  onSubmit() {
    console.log('title', this.title);
    console.log('author', this.author);
    console.log('message', this.message);
    console.log('category', this.selected);
  }
}
