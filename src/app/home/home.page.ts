import { Component, OnInit } from '@angular/core';
import { HomeService } from "./home.service"
import { HttpClient  } from '@angular/common/http'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private movieService: HomeService, private http: HttpClient) { }

  movies = []

  ngOnInit() {
    this.movies = this.movieService.getMovies()
  }

  search(title) { 
    this.http.get("http://www.omdbapi.com/?apikey=cf054f35&t="+ title.value).subscribe(movie => {
      this.movies.push(movie)
      this.movieService.addMovie(movie)
    })
    
  }

  clear() { this.movieService.clearHistory(); this.movies = []}
}
