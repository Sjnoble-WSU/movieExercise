import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  id: any;
  constructor(private http:HttpClient) { }

  getMovieList(keywords:any) {
    return this.http.get(`https://gateway.maverik.com/movie/api/movie/title/${keywords}?source=omdb`).pipe(
      map((res: any) =>
      res.map((data: any) => {
        return {
          title: data.title,
          imdbID: data.imdbID,
          poster: data.poster
        }
      }))
    )
  }

  getMovieInfo() {
    console.log(this.id);
    return this.http.get(`https://gateway.maverik.com/movie/api/movie/${this.id}?source=omdb`).pipe();
  }

  setId(id: any) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}


