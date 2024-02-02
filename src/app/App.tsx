import { useTooggleTheme } from '@/shared/libs/useToogleTheme/useTooggleTheme';
import { classNames } from '@/shared/libs/classNames/classNames';
import './styles/index.scss';
import { AppRouter } from './provider/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

export const App = () => {
  const [theme] = useTooggleTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
