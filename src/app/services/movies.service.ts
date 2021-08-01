import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getData(keywords:any) {
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
}


