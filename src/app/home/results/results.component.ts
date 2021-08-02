import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() childMessage!: any;
  movieData: any;

  constructor(private movie:MoviesService) {
  }

  ngOnInit() {
    console.log(this.childMessage);
  }

  ngOnChanges() {
    this.setData(this.childMessage);
  }

  setData(data:any) {
    this.movieData = data;
    console.log(this.movieData);
  }

  test(movieId: any) {
    this.movie.setId(movieId);
    console.log(movieId);
  }

}
