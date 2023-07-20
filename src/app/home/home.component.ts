import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../service/services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'notifications-app';

  constructor(private announcementService: AnnouncementService) {}

  announcements: Announcement[] = [];
  selectedCategory: Category;
  filteredAnnouncement: Announcement[];

  ngOnInit() {
    this.announcementService
      .getAnnouncements()
      .subscribe((announcements: Announcement[]) => {
        this.announcements = announcements;
        this.filteredAnnouncement = this.announcements;
        this.announcementService.serviceCall();
      });
  }

  OnCategorySelected(category: Category) {
    if (category === undefined) {
      this.filteredAnnouncement = this.announcements;
      return;
    }
    this.selectedCategory = category;
    this.filteredAnnouncement = this.announcements.filter(
      (announcement) => announcement.category.id === category.id
    );
  }
}
