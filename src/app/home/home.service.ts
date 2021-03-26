import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private movies = []

  constructor(private http: HttpClient) { }

  getMovies() {
    return [...this.movies]
  }

  getMovie(movieTitle: string) {
    return {
      ...this.movies.find(movie => {
        return movie.Title === movieTitle
      })
    }
  }

  addMovie(movie){
       
   this.movies.push(movie)

  }

  clearHistory(){
    this.movies = []
  }
}
