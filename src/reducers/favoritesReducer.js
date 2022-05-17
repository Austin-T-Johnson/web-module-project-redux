const initialState = {
    favorites: [{
        title: "Movie", 
        id: 1
    }],
    displayFavorites: false
}

const favoritesReducer = (favoritesState = initialState, action) => {
    switch(action.type) {
        default:
            return(favoritesState)
    }
}

export default favoritesReducer;

