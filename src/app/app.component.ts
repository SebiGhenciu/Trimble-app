import { Component } from '@angular/core';
import { Announcement } from './announcement';
import { Title } from '@angular/platform-browser';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notifications-app';

  announcements: Announcement[] = [
    {
      title: 'titlu 1',
      message: 'Acesta este un mesaj 1',
      author: 'Autor 1',
      category: { id: 1, name: 'name1' },
    },

    {
      title: 'title 2',
      message: 'Acesta este un mesaj 2',
      author: 'autor 2',
      category: { id: 2, name: 'name2' },
    },

    {
      title: 'title 3',
      message: 'Acesta este un mesaj 3',
      author: 'autor 3',
      category: { id: 3, name: 'name3' },
    },
  ];

  selectedCategory: Category;
}
