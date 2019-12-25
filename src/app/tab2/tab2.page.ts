import { Component } from '@angular/core';
import {Tab1Service} from '../tab1/tab1.service';
import {Sings} from '../tab1/tab1.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  sings: Sings[];
  constructor(private tab1service: Tab1Service) {}

  ngOnInit(){
    this.sings = this.tab1service.getAlltab1();
    this.sings.sort(function(a,b){
      var nameA= a.Name.toUpperCase();
      var nameB=b.Name.toUpperCase();
      if(nameA<nameB){
        return -1;
      }
      if(nameA>nameB){
        return 1;
      }
      return 0;
    })
  }
  searchText;
}
