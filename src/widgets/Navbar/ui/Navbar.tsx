import AppLink, { AppLinkTheme } from '@/shared/UIKit/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cls.navbar}>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={cls.mainLink}>
          About
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
          App
        </AppLink>
      </div>
    </div>
  );
};
