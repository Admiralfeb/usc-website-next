import { INavItem } from 'models/navItem';

export const navItems: INavItem[] = [
  { to: '/home', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/information', text: 'Information' },
  { to: '/builds', text: 'USC Builds' },
  { to: '/massacres', text: 'Massacre Mission Tracker' },
  {
    to: 'https://www.redbubble.com/people/UnitedSystems/shop',
    text: 'Merch',
    local: false,
  },
  { to: '/join', text: 'Join' },
];
