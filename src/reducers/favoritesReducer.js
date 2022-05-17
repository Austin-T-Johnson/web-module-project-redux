import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE} from '../actions/favoritesActions'

const initialState = {
    favorites: [],
    displayFavorites: false
}

const favoritesReducer = (favoritesState = initialState, action) => {
    switch (action.type) {
        case (TOGGLE_FAVORITES): {
            return {
                ...favoritesState,
                displayFavorites: !StaticRange.displayFavorites
            }
        }
        case (ADD_FAVORITE): {
            return {
                ...favoritesState,
                favorites: [...favoritesState.favorites, action.payload]
            }
        }
        case (REMOVE_FAVORITE): {
           return {
               ...favoritesState,
               favorites: favoritesState.favorites.filter(item => (item.id !== action.payload))
           }
        }
        default:
            return (favoritesState)
    }
}

export default favoritesReducer;

