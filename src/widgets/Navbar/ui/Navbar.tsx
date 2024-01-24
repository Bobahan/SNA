import cls from './Navbar.module.scss';
import AppLink from '../../../shared/UIKit/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cls.navbar}>
      <div className={cls.links}>
        <AppLink to={'/about'} className={cls.mainLink}>
          About
        </AppLink>
        <AppLink to={'/'}>App</AppLink>
      </div>
    </div>
  );
};
