import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from '../pages/manage/manage.component';
import { UploadComponent } from '../pages/upload/upload.component';
import { VideoRoutingModule } from './video-routing.module';

@NgModule({
  declarations: [ManageComponent, UploadComponent],
  imports: [CommonModule, VideoRoutingModule],
})
export class VideoModule {}
