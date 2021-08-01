import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() childMessage!: any;
  movieData: any;

  constructor() {
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

}
