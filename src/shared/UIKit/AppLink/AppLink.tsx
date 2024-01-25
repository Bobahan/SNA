import { Link, LinkProps } from 'react-router-dom';
import { cn } from '@/shared/libs/cn';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
  theme?: AppLinkTheme;
}

const AppLink: React.FC<AppLinkProps> = ({
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  className,
}) => {
  return (
    <Link className={cn(cls.AppLink, {}, [className, cls[theme]])} to={to}>
      {children}
    </Link>
  );
};

export default AppLink;
