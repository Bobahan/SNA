import { render } from 'react-dom';
import App from './App';
import './index.module.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { AboutLazy } from './components/AboutLazy';

const routes = [
  { path: '/', element: <App /> },
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
