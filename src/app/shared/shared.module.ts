import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { TabsContainerComponent } from './tabs-container/tabs-container.component';
import { TabComponent } from './tab/tab.component';
import { InputComponent } from './input/input.component';
import { provideEnvironmentNgxMask, NgxMaskDirective } from 'ngx-mask';
import { AlertComponent } from './alert/alert.component';
//import { ModalService } from '../secrvices/modal.service';

@NgModule({
  declarations: [
    ModalComponent,
    TabsContainerComponent,
    TabComponent,
    InputComponent,
    AlertComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
  exports: [
    ModalComponent,
    TabComponent,
    TabsContainerComponent,
    InputComponent,
    AlertComponent,
  ],
  providers: [provideEnvironmentNgxMask()],
  // providers: [ModalService],
})
export class SharedModule {}
