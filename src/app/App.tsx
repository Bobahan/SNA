import { AppRouter } from './providers/router';
import { Navbar } from '../widgets/Navbar';
import { useTheme } from '../shared/libs/useTheme';
import './styles/index.scss';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};
