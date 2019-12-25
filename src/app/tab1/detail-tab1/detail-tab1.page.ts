import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Tab1Service} from '../tab1.service';
import { Sings } from '../tab1.model';

@Component({
  selector: 'app-detail-tab1',
  templateUrl: './detail-tab1.page.html',
  styleUrls: ['./detail-tab1.page.scss'],
})
export class DetailTab1Page implements OnInit {
  loadedTab1: Sings;
  constructor(private activated: ActivatedRoute, private tab1service:Tab1Service, private router:Router) { }

  ngOnInit() {
    this.activated.paramMap.subscribe(paramMap => {
      if(!paramMap.has('tab1Id')){
        return;
      }
      const tab1Id = paramMap.get('tab1Id');
      this.loadedTab1=this.tab1service.getTab1(tab1Id)
    });
  }

}
