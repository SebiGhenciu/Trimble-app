import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../service/services/announcement.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
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

  EditAnnouncement() {
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
