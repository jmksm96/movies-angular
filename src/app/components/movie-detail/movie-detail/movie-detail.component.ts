import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../../services/common.service';
import {MovieDetailsInterface} from '../../../interfaces/movie-details.interface';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movieDetail!: MovieDetailsInterface
  param: string = '2'
  id!: string
  IMG_PATH: string = 'https://image.tmdb.org/t/p/w1280'

  constructor(private commonService: CommonService) {
  }


  ngOnInit(): void {
    this.getMovieDetail(this.param)
    console.log(this.movieDetail)
  }

  getMovieDetail(param: string): void {
    this.commonService.getDetails(param).subscribe(res => this.movieDetail = res)
  }

}
