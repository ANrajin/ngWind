import { NgClass, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [NgClass, NgIf,FormsModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
   @Input() currentPage:number = 1;
   @Input() limit: number = 5;
   @Input() total: number = 100;
   @Output() changePage = new EventEmitter<number>();

   pages: number [] = [];

   ngOnInit(): void{
    const pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(1, pagesCount);
    
   }

   range(start:number, end:number): number[]{
    return [...Array(end).keys()].map((el)  => el + start);
   }

}