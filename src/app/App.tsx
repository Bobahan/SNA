import { useTooggleTheme } from '@/shared/libs/useToogleTheme/useTooggleTheme';
import { classNames } from '@/shared/libs/classNames/classNames';
import './styles/index.scss';
import { AppRouter } from './provider/router';

export const App = () => {
  const [theme, toggleTheme] = useTooggleTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <h1>Hello World!</h1>
      <button onClick={toggleTheme}>Change Theme</button>
      <AppRouter />
    </div>
  );
};
