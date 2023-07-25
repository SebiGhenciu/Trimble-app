import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})

//In categories.component.ts should have a list of categories with the following categories:Course, General, Laboratory
export class CategoriesComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  categories: Category[] = [
    {
      id: '1',
      name: 'Course',
    },

    {
      id: '2',
      name: 'General',
    },

    {
      id: '3',
      name: 'Laboratory',
    },
  ];

  @Output() selectedCategory: EventEmitter<Category> =
    new EventEmitter<Category>();

  OnSelectedCategory(category: Category) {
    this.selectedCategory.emit(category);
  }
}
