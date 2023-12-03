import { Component } from '@angular/core';
import { pageTransition } from 'src/app/shared/utils/animations';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.css'],
  animations: [pageTransition]
})
export class ElementsComponent {
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
