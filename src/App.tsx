import { useState } from 'react';
import './App.scss';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello World: {count}</h1>
      <button className="button" onClick={() => setCount(count + 1)}>
        Add counter
      </button>
    </div>
  );
};

export default App;
