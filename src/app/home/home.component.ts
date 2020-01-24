import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpResponse } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products = [];
  destroy$:any;
  constructor(private apiService:ApiService) { }
  ngOnInit() {
    debugger
    this.apiService.sendGetRequest().subscribe((res: HttpResponse<any>)=>{  
      debugger
      console.log(res);  
      this.products = res.body;  
    }) 
  }
  public firstPage() {
    debugger
    this.products = [];
    this.apiService.sendGetRequestToUrl(this.apiService.first).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.products = res.body;
    })
  }
  public previousPage() {
    debugger
    if (this.apiService.prev !== undefined && this.apiService.prev !== '') {
      this.products = [];
      this.apiService.sendGetRequestToUrl(this.apiService.prev).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }

  }
  public nextPage() {
    debugger
    if (this.apiService.next !== undefined && this.apiService.next !== '') {
      this.products = [];
      this.apiService.sendGetRequestToUrl(this.apiService.next).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.products = res.body;
      })
    }
  }
  public lastPage() {
    debugger
    this.products = [];
    this.apiService.sendGetRequestToUrl(this.apiService.last).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.products = res.body;
    })
  }
}
