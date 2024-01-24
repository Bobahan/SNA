import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

const AppLink: React.FC<AppLinkProps> = (props) => {
  const { children, to, className } = props;
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default AppLink;
