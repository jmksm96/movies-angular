export interface MovieDetailsInterface {

  adult: boolean
  'backdrop_path': string
  'belongs_to_collection': null
  'budget': number
  'genres': Genres[]
  'homepage': string
  'id': number
  'imdb_id': string
  'original_language': string
  'original_title': string
  'overview': string
  'popularity': number
  'poster_path': null
  'production_companies': ProductionCompanies[]
  'production_countries': ProductionCountries[]
  'release_date': string
  'revenue': number,
  'runtime': number,
  'spoken_languages': SpokenLanguage[],
  'status': string
  'tagline': string
  'title': string
  'video': boolean,
  'vote_average': number
  'vote_count': number
}

interface Genres {
  id: number
  name: string
}
interface ProductionCompanies {
  'id': 508,
  'logo_path': string
  'name': string
  'origin_country': string
}

interface ProductionCountries {
  'iso_3166_1': string
  'name': string
}

interface SpokenLanguage {
  'iso_639_1': string
  'name': string
}
