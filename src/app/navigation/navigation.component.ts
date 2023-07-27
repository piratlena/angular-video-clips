import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(public modal: ModalService) {}

  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggleModal('auth');
  }

  ngOnInit(): void {}
}
