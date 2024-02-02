import { useTooggleTheme } from '@/shared/libs/useToogleTheme/useTooggleTheme';
import { classNames } from '@/shared/libs/classNames/classNames';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPages';
import { MainPage } from '@/pages/MainPage';
import './styles/index.scss';

export const App = () => {
  const [theme, toggleTheme] = useTooggleTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <h1>Hello World!</h1>
      <button onClick={toggleTheme}>Change Theme</button>

      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
