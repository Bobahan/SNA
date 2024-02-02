import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <div>
        <Link to={'/about'}>Go To About Page</Link>
      </div>
    </div>
  );
};

export default MainPage;
