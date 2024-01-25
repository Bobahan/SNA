import { useTheme } from '@/shared/libs/useTheme';
import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/Navbar';
import { cn } from '../shared/libs/cn';
import './styles/index.scss';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
