import { Component, OnInit } from '@angular/core';
import { Announcement } from './announcement';
import { Title } from '@angular/platform-browser';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'notifications-app';

  ngOnInit() {}
}
