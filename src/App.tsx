import { useState } from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.app}>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>App</Link>
      <h1>Hello World: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add counter</button>
    </div>
  );
};

export default App;
