import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>App</Link>
    </div>
  );
};

export default About;
