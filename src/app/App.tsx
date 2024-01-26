import { Suspense } from 'react';
import { useTheme } from '@/shared/libs/useTheme';
import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/Navbar';
import { cn } from '../shared/libs/cn';
import { Sidebar } from '@/widgets/Navbar/Sidebar';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Suspense fallback="loading...">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
