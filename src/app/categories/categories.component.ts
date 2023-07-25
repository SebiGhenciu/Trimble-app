import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';
import { AnnouncementService } from '../service/services/announcement.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})

//In categories.component.ts should have a list of categories with the following categories:Course, General, Laboratory
export class CategoriesComponent implements OnInit {
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

  @Output() selectedCategory: EventEmitter<Category> =
    new EventEmitter<Category>();

  OnSelectedCategory(category: Category) {
    this.selectedCategory.emit(category);
  }
}
