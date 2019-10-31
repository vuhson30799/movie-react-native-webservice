import {FETCH_MOVIES,FETCH_FAILED,FETCH_SUCCEEDED} from "../actions/actionTypes";
// saga effects
import {put,takeLatest} from 'redux-saga/effects';
import {Api} from "./api";

function* fetchMovies() {
    console.log("hello");
    try {
        const receivedMovies = Api.getMoviesFromApi();
        yield put({type:FETCH_SUCCEEDED, receivedMovies: receivedMovies});
        console.log(receivedMovies[0].name);
        console.log(receivedMovies[1].releaseYear);
        console.log("this is try");
        console.log("This is try bro")

    }catch (error) {
        yield put({type:FETCH_FAILED,error})
        console.log("Hi");
    }
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES,fetchMovies);
}