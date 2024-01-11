import { NgClass, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [NgClass, NgIf,FormsModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
  
})
export class PaginationComponent {
   @Input() currentPage:number = 1;
   @Input() pageSize: number = 10;
   @Input() total: number =55;

   @Output()
   changePage = new EventEmitter<{ pageSize: number, currentPage: number }>();

   firstPage:number = 1;
   pageDifference: number = 5;
   lastPage: number = this.pageDifference;


   pages: Page [] = [];

   ngOnInit(): void{
      this.preparePages();
   }

   onChangePageSize(event: any){
    this.pageSize = event.target.value;
    this.preparePages();
   }

   getPageCount():number{
    return Math.ceil(this.total / this.pageSize);
   }

   setCurrentPage(page:Page){
     this.currentPage = page.pageNumber;
     this.preparePages();
   }

   goToPrevPage(){
    if(this.currentPage == this.firstPage){
      if(this.currentPage!=1){
        this.firstPage = this.currentPage - this.pageDifference;
        this.lastPage = this.firstPage + this.pageDifference-1;
        this.currentPage = this.currentPage - 1;
        this.preparePages();
      }
      
    }else{
      this.currentPage = this.currentPage - 1;
      this.preparePages();
    }
   }

   goToNextPage(){
    if(this.currentPage == this.lastPage){
      if(this.currentPage != this.getPageCount()){
        this.firstPage = this.currentPage+1;
        this.lastPage = this.generateLastPage();
        this.currentPage = this.currentPage + 1;
        this.preparePages();
      }
    }else{
      this.currentPage = this.currentPage + 1;
      this.preparePages();
    }
   }

   generateLastPage(){
    if(this.getPageCount()<this.pageDifference){
      this.lastPage = this.getPageCount();
    }else if(this.firstPage ==((Math.floor(this.getPageCount() / this.pageDifference))*this.pageDifference)+1){
      this.lastPage = this.getPageCount();
    }else{
      this.lastPage= this.firstPage + this.pageDifference-1;
    }
    
    return this.lastPage;
   }

   preparePages(){
    this.changePage.emit({pageSize: this.pageSize, currentPage:this.currentPage});
    const ranges: number[] = this.range(this.firstPage, (this.generateLastPage()-this.firstPage)+1);
    this.pages = [];
    this.pages = ranges.map(x =>{
      return {
        isFirst: x===this.firstPage,
        isLast : x===this.lastPage,
        isActive:x===this.currentPage,
        pageNumber: x
      }
    });
   }

   range(start:number, end:number): number[]{
    return [...Array(end).keys()].map((el)  => el + start);
   }

}

export interface Page{
  isFirst: boolean;
  isLast: boolean;
  isActive:boolean;
  pageNumber: number;
}