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
                ...moviesState,
                movies: moviesState.movies.filter(item=>(action.payload !== item.id))
            }
            case ADD_MOVIE: {
                const newMovie = {
                    ...action.payload,
                    id: Date.now()
                }
                return {
                    ...moviesState,
                    movies: [ ...moviesState.movies, newMovie ]
                }
            }
        default:
            return moviesState;
    }
}

export default reducer;