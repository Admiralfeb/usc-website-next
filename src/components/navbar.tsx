import { useMediaQuery, useTheme } from '@material-ui/core';
import { navItems } from 'data/navItems';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { NavbarMobile } from './navbar.mobile';
import { NavbarFull } from './navbar.full';

const ResponsiveNavbar = ({
  isMobile,
  title,
}: {
  isMobile: boolean;
  title: string;
}) => {
  return isMobile ? (
    <div data-testid="mobile">
      <NavbarMobile title={title} navItems={navItems} />
    </div>
  ) : (
    <div data-testid="full">
      <NavbarFull navItems={navItems} />
    </div>
  );
};

export const Navbar = () => {
  const pathName = useRouter().pathname;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const title = useMemo(
    () => navItems.find((x) => pathName.startsWith(x.to))?.text,
    [pathName]
  );

  return (
    <>
      <ResponsiveNavbar isMobile={isMobile} title={title} />
    </>
  );
};
