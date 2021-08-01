import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-keywordinput',
  templateUrl: './keywordinput.component.html',
  template: `
    <app-results [childMessage]="parentMessage"></app-results>
  `,
  styleUrls: ['./keywordinput.component.css'],
  //styles: ['h1 { margin-top: 12vh }']
})
export class KeywordinputComponent implements OnInit {

  keywordForm!: FormGroup;
  movieData = [];

  constructor(private movie:MoviesService, private fb: FormBuilder){}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.keywordForm = this.fb.group({
      keyword: ''
    });
  }

  onSubmit(): void {
    let keywords = this.keywordForm.value.keyword;
    console.log(keywords);
    const stripped = keywords.replace(/\s+/g, ',');
    console.log(stripped);
    this.movie.getData(stripped).subscribe(data => {
      console.log(data);
      this.movieData = data;
    })
  }

}
