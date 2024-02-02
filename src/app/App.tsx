import { useTooggleTheme } from '@/shared/libs/useToogleTheme/useTooggleTheme';
import { classNames } from '@/shared/libs/classNames/classNames';
import './styles/index.scss';
import { AppRouter } from './provider/router';
import { Navbar } from '@/widgets/Navbar';

export const App = () => {
  const [theme] = useTooggleTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
