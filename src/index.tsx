import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import App from './App';
import { AboutLazy } from './components/AboutLazy';

const routes = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: (
      <Suspense fallback="loading...">
        <AboutLazy />
      </Suspense>
    ),
  },
];

render(
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
