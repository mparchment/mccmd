import { createContext } from 'react';

export const HeaderContext = createContext({
  headerHeight: 0,
  setHeaderHeight: () => {},
});