import { lazy } from 'react';

export const Add = lazy(() => import('./system/add.svg'));
export const Clear = lazy(() => import('./system/clear.svg'));
export const Close = lazy(() => import('./system/close.svg'));
export const Search = lazy(() => import('./system/search.svg'));

export const IconsSystem = {
  add: <Add />,
  clear: <Clear />,
  close: <Close />,
  search: <Search />,
};

export default IconsSystem;
