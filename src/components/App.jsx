import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const PsychologistsPage = lazy(() => import('../pages/PsychologistsPage'));
const FavoritePage = lazy(() => import('../pages/FavoritesPage'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        }
      />

      <Route
        path="psychologists"
        element={
          <Suspense fallback={<Loader />}>
            <PsychologistsPage />
          </Suspense>
        }
      >
        <Route path="reviews" element={<Reviews />} />
      </Route>
      <Route
        path="favorites"
        element={
          <Suspense fallback={<Loader />}>
            <FavoritePage />
          </Suspense>
        }
      />
    </Routes>
  );
};
