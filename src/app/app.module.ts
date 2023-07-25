import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CategoriesComponent } from './categories/categories.component';
import { NamePipe } from './name.pipe';
import { AddAnnouncementFormComponent } from './add-announcement-form/add-announcement-form.component';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { EmptyComponent } from './empty/empty.component';
import { RouterModule } from '@angular/router';
import { AnnouncementService } from './service/services/announcement.service';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    CategoriesComponent,
    NamePipe,
    AddAnnouncementFormComponent,
    HomeComponent,
    EmptyComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSelectModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AnnouncementService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
