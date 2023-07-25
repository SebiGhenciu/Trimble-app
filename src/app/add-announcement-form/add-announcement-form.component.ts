import { Component } from '@angular/core';
import { Category } from '../category';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { AnnouncementService } from '../service/services/announcement.service';
import { Announcement } from '../announcement';
import { Subscriber, subscribeOn } from 'rxjs';
import { CategoryService } from '../category.service';

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

  constructor(
    private announcementService: AnnouncementService,
    private categoriesService: CategoryService
  ) {}

  categories: Category[];
  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }

  AddAnnouncement() {
    const announcement: Announcement = {
      title: this.title,
      message: this.message,
      author: this.author,
      categoryId: this.selected,
      imageUrl: '',
      id: '',
    };

    console.log('title', this.title);
    console.log('author', this.author);
    console.log('message', this.message);
    console.log('category', this.selected);
    this.announcementService.addAnnouncement(announcement).subscribe();
  }

  onSubmit() {
    console.log('title', this.title);
    console.log('author', this.author);
    console.log('message', this.message);
    console.log('category', this.selected);
  }
}
