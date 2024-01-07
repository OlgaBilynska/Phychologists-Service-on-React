import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import Loader from './Loader';
import HomePage from 'pages/HomePage/HomePage';
import PsychologistsPage from '../pages/PsychologistsPage';
import FavoritePage from 'pages/FavoritesPage/FavoritesPage';

// const HomePage = lazy(() => import('../pages/HomePage'));
// const PsychologistsPage = lazy(() => import('../pages/PsychologistsPage'));
// const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Suspense fallback={<Loader />}>{<HomePage />}</Suspense>}
      />
      <Route
        path="psychologists"
        element={
          <Suspense fallback={<Loader />}>{<PsychologistsPage />}</Suspense>
        }
      />
      <Route
        path="favorites"
        element={<Suspense fallback={<Loader />}>{<FavoritePage />}</Suspense>}
      />
    </Routes>
  );
};
