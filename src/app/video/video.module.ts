import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from '../pages/manage/manage.component';
import { UploadComponent } from '../pages/upload/upload.component';
import { VideoRoutingModule } from './video-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ManageComponent, UploadComponent],
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class VideoModule {}
