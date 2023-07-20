import { Component } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss'],
})
export class AddAnnouncementFormComponent {
  title: string;
  author: string;
  message: string;
  selected: string;

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
    console.log('title', this.title);
    console.log('author', this.author);
    console.log('message', this.message);
    console.log('selected', this.selected);
  }

  onSubmit() {
    console.log('title', this.title);
    console.log('author', this.author);
    console.log('message', this.message);
    console.log('selected', this.selected);
  }
}
