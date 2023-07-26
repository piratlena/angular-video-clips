import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/secrvices/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  //providers: [ModalService],
})
export class ModalComponent implements OnInit {
  constructor(public modal: ModalService) {}
  closeModal() {
    this.modal.toggleModal();
  }
  ngOnInit(): void {}
}