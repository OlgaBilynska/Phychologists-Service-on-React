import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import Loader from './Loader';
// import { AuthProvider } from 'auth';

const HomePage = lazy(() => import('../pages/HomePage'));
const PsychologistsPage = lazy(() => import('../pages/PsychologistsPage'));
const FavoritePage = lazy(() => import('../pages/FavoritesPage'));

export const App = () => {
  const location = useLocation();

  if (location.pathname === '/home') {
    return <Navigate to="/" />;
  }

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
      />
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
