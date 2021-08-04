import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataResponse} from '../interfaces/main.interface';
import {MovieDetailsInterface} from '../interfaces/movie-details.interface';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  API_KEY = '21305fe0479efb03948d62b63a6c78dd'

  constructor(private http: HttpClient) {
  }

  getData(param: string, page: number = 1) {
    return this.http.get<DataResponse>(
      `https://api.themoviedb.org/3/movie/${param}?api_key=${this.API_KEY}&language=en-US&page=${page}`
    )
  }
  getDetails(param: string, page: number = 1) {
    return this.http.get<MovieDetailsInterface>(
      `https://api.themoviedb.org/3/movie/${param}?api_key=${this.API_KEY}&language=en-US&page=${page}`
    )
  }
}
