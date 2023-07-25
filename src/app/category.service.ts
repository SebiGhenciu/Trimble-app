import { Injectable } from '@angular/core';
import { Category } from './category';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
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

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}
