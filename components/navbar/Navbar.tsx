import React, { Suspense } from 'react';
import Container from '../shared/Container';
import Logo from './Logo';
import NavSearch from './NavSearch';
import CartButton from './CartButton';
import Theme from './Theme';
import DropDownLinks from './DropDownLinks';

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex items-center justify-between py-6 px-4">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className="hidden sm:flex items-center justify-center w-1/2">
          <Suspense>
            <NavSearch />
          </Suspense>
        </div>
        <div className="flex items-center gap-4">
          <Theme />
          <CartButton />
          <DropDownLinks />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
