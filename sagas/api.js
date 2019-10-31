const urlGetMovies = 'http://localhost:8080/movie';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method : 'GET',
        body: '',
    });

    const movies = yield response.status === 200? JSON.parse(response._bodyInit): [];
    return movies;
}

export const Api = { getMoviesFromApi};