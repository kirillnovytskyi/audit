import { HeaderMain } from './HeaderMain';
import { HeaderNav } from './HeaderNav';

export const Header = () => {
  return (
    <header className="page-header">
      <HeaderMain />
      <div className="page-header__divider"></div>
      <HeaderNav />
    </header>
  );
};