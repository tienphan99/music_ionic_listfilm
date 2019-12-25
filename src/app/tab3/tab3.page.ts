import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  url='https://swapi.co/api/films/';
  inforFilm:any;
  listFilms:any;
  selectedId: number;
  constructor(private http:HttpClient,private router : Router) {}
  
  ngOnInit() {
    this.getAlldata().subscribe(data=>{
      this.inforFilm=data;
      this.listFilms=this.inforFilm.results;
    });
  }
  get(e){
    const x = e.slice(-2, -1);
    this.router.navigate(['tabs/tab3/detail-tab3' ,x])
  }
  getAlldata(){
    return this.http.get(this.url);
  }
  
}
