// Psychologists
export const selectPsychologists = state => state.psychologists.psychologists;
export const selectPsychologistsIsLoading = state =>
  state.psychologists.isLoading;
export const selectPsychologistsError = state => state.psychologists.error;

// Favorites
export const selectFavoritePsychologists = state => state.favorites.favorites;
export const selectFavoritesIsLoading = state => state.favorites.isLoading;
export const selectFavoritesError = state => state.favorites.error;

// Authentication
export const selectUserAuthenticated = state => state.auth.isAuthenticated;
export const selectUserData = state => state.auth.userData;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
