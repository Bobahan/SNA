import { Suspense } from 'react';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Suspense fallback="loading...">
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};
