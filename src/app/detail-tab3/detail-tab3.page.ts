import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-detail-tab3',
  templateUrl: './detail-tab3.page.html',
  styleUrls: ['./detail-tab3.page.scss'],
})
export class DetailTab3Page implements OnInit {
  film:any;
  constructor(private route:ActivatedRoute,private http:HttpClient) { }

  ngOnInit() {
    this.route.paramMap.subscribe(film =>{
      const x = film.get('id')
      this.getFilmId(x).subscribe(data =>{
        this.film=data
      })
    })
  }
  getFilmId(id)
  {
    return this.http.get(`https://swapi.co/api/films/${id}/`)
  }
}
