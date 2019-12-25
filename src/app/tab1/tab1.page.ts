import { Component } from '@angular/core';
import {Tab1Service} from '../tab1/tab1.service';
import {Sings} from '../tab1/tab1.model';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  sings: Sings[];
  constructor(private tab1service:Tab1Service) {}
  
  ngOnInit(){
    this.sings=this.tab1service.getAlltab1();
    this.sings.sort(function(a,b){
      var nameA = a.Name.toUpperCase();
      var nameB = b.Name.toUpperCase();
      if(nameA<nameB){
        return -1;
      }
      if(nameA>nameB){
        return 1;
      }
      return 0;
    });
  }
  changeStatus() {
    this.visibleImage = !this.visibleImage;
  }

  searchText;
  visibleImage = false;
}
