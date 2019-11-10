import {FETCH_MOVIES,FETCH_FAILED,FETCH_SUCCEEDED} from "../actions/actionTypes";
// saga effects
import {put,takeLatest} from 'redux-saga/effects';
import {Api} from "./api";


function* fetchMovies() {
    try {
        const response = yield Api.getMoviesFromApi();

        yield put({type:FETCH_SUCCEEDED, receivedMovies: response});

        console.log(response);
    }catch (error) {
        yield put({type:FETCH_FAILED,error});
        console.log(error);
    }
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES,fetchMovies);
}