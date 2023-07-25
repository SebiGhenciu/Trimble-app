import { Component } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../service/services/announcement.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  title: string;
  author: string;
  message: string;
  selected: string;
  id: string;

  constructor(
    private router: ActivatedRoute,
    private announcementService: AnnouncementService,
    private categoriesService: CategoryService
  ) {
    this.router.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('id' + this.id);
    });
  }

  categories: Category[];
  ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
      });
  }

  onSubmit() {
    const announcement: Announcement = {
      title: this.title,
      message: this.message,
      author: this.author,
      categoryId: this.selected,
      imageUrl: '',
      id: this.id,
    };
    console.log('title', this.title);
    console.log('author', this.author);
    console.log('message', this.message);
    console.log('category', this.selected);
    this.announcementService.editAnnouncement(announcement).subscribe();
  }
}
