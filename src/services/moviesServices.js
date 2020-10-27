import axios from 'axios';

export default class MoviesServices {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:8000/api',
      timeout: 1000,
    })
  }

  getAll() {
    return this.apiClient.get('/movies');
    // return {
    //   data: [{"id":1,"title":"Hubie Halloween","director":"Steven Brill","imageUrl":"https://m.media-amazon.com/images/M/MV5BMTE0N2EyMzgtMWJhZS00ZWNmLThjZmQtMjcxYTk1NTJiMGVkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_UY268_CR16,0,182,268_AL_.jpg","releaseDate":"2020","genre":"Comedy","duration":"102"},{"id":2,"title":"The Shawshank Redemption","director":"Frank Darabont","imageUrl":"https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg","releaseDate":"1994","genre":"Drama","duration":"142"},{"id":3,"title":"The Godfather","director":"Francis Ford Coppola","imageUrl":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg","releaseDate":"1972","genre":"Crime","duration":"175"},{"id":4,"title":"The Godfather: Part II","director":"Francis Ford Coppola","imageUrl":"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg","releaseDate":"1974","genre":"Crime","duration":"202"},{"id":5,"title":"The Dark Knight","director":"Christopher Nolan","imageUrl":"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg","releaseDate":"2008","genre":"Action","duration":"152"}]
    // };
  }
}

export const moviesServices = new MoviesServices()
