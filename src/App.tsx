import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/index.scss';
import { LOCAL_STORAGE_THEME_KEY } from './theme/ThemeContext';

const App = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);

  const completedClass = theme ? `${styles.light}` : `${styles.dark}`;

  const toogleTheme = () => {
    setTheme((theme) => !theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, String(theme));
  };

  return (
    <div className={`${styles.app} ${completedClass}`}>
      <button onClick={toogleTheme}>Toggle theme</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>App</Link>
      <h1>Hello World: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add counter</button>
    </div>
  );
};

export default App;
