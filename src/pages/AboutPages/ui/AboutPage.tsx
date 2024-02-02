import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <div>
        <Link to={'/'}>Go To Main Page</Link>
      </div>
    </div>
  );
};

export default AboutPage;
