import { Suspense } from 'react';
import { useTooggleTheme } from '@/shared/libs/useToogleTheme/useTooggleTheme';
import { classNames } from '@/shared/libs/classNames/classNames';
import { AppRouter } from './provider/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import './styles/index.scss';
import { PageLoader } from '@/shared/UIKit/PageLoader';

export const App = () => {
  const [theme] = useTooggleTheme();


  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
