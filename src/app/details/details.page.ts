import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HomeService } from "../home/home.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  movie = {}

  constructor(private activatedRoute: ActivatedRoute, private movieService: HomeService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const title = paramMap.get('movieTitle')
      this.movie = this.movieService.getMovie(title)
    })
  }

}
