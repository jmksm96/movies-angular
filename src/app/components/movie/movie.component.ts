import {Component, Input, OnInit} from '@angular/core';
import {TopRatedInterface} from '../../interfaces/top-rated.interface';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie!: TopRatedInterface
  IMG_PATH: string = 'https://image.tmdb.org/t/p/w1280'

  constructor() {
  }

  ngOnInit(): void {
  }

}
