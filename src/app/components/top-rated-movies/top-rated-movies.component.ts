import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {TopRatedInterface} from '../../interfaces/top-rated.interface';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit {
data: TopRatedInterface[] = []

  constructor(private getTopService: MoviesService) { }

  ngOnInit(): void {
    this.getTopMovies('top_rated')
  }

  getTopMovies(params: string, page?: number):void{
    this.getTopService.getData(params).subscribe((res) => {
      this.data = res.results;
    })
  }
}
