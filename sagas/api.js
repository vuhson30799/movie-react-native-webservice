const urlGetMovies = 'http://192.168.1.14:8080/movie';

function* getMoviesFromApi() {
    console.log("aaa");
    const response = yield fetch(urlGetMovies, {
        method : 'GET',
        body: '',
    }).then(response => response.json());


    return response;
}

export const Api = { getMoviesFromApi};