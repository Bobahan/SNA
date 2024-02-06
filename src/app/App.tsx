import { Suspense, useEffect } from 'react';
import { useTooggleTheme } from '@/shared/libs/useToogleTheme/useTooggleTheme';
import { classNames } from '@/shared/libs/classNames/classNames';
import { AppRouter } from './provider/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { PageLoader } from '@/shared/UIKit/PageLoader';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { initAuthData } from '@/entities/User/model/slice/userSlice';

export const App = () => {
  const dispatch = useAppDispatch();
  const [theme] = useTooggleTheme();

  useEffect(() => {
    dispatch(initAuthData());
  }, []);

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