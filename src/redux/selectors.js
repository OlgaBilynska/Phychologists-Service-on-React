export const selectPsychologists = state => state.psychologists.psychologists;
export const selectPsychologistsIsLoading = state =>
  state.psychologists.isLoading;
export const selectPsychologistsError = state => state.psychologists.error;

export const selectFavoritePsychologists = state => state.favorites.favorites;
export const selectFavoritesIsLoading = state => state.favorites.isLoading;
export const selectFavoritesError = state => state.favorites.error;
