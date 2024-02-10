import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';
import { pageTransition } from 'src/app/shared/utils/animations';

@Component({
  selector: 'admin-modal',
  standalone: true,
  imports: [
    CommonModule,
    ModalModule
  ],
  templateUrl: './admin-modal.component.html',
  styleUrl: './admin-modal.component.css',
  animations: [pageTransition]
})
export class AdminModalComponent {
  showModal: boolean = false;

  modalCompnent: ModalComponent

  constructor() {
    this.modalCompnent = new ModalComponent();
  }

  openModal() {
    this.showModal = !this.showModal;
  }

  onModalCloseHandler(event: boolean) {
    this.showModal = event;
  }
}
