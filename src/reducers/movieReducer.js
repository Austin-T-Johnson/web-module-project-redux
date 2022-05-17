import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}

const reducer = (moviesState = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                movies: moviesState.movies.filter(item=>(action.payload !== item.id))
            }
        default:
            return moviesState;
    }
}

export default reducer;