import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../service/services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss'],
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement: Announcement;

  constructor(private announcementService: AnnouncementService) {}
  ngOnInit(): void {}

  DeleteAnnouncement() {
    this.announcementService
      .deleteAnnouncement(this.announcement.id)
      .subscribe();
  }
}
