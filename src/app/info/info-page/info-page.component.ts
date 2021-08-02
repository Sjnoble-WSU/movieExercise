import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {
  imdbID: any;
  movieInfo: any;
  cast: any;
  genre: any;
  constructor(private movie:MoviesService) { }

  ngOnInit(): void {
    this.movie.getMovieInfo().subscribe(async data => {
      console.log(data);
      this.saveMovieInfo(data);
    });

  }

  saveMovieInfo(data: any) {
    this.movieInfo = data;
    this.cast = this.movieInfo.actors.replace(/ *, */g, '\n');
    this.genre = this.movieInfo.genre.replace(/ *, */g, ' | ');
    console.log(this.genre);
  }

}
