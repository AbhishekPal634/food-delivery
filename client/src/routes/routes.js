import Home from '../pages/Home';
import Menu from '../pages/Menu';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Success from '../pages/Success';
import NotFound from '../pages/NotFound';

// Simple route definitions array
const routes = [
  {
    path: '/',
    element: Home,
    exact: true,
  },
  {
    path: '/menu',
    element: Menu,
  },
  {
    path: '/cart',
    element: Cart,
  },
  {
    path: '/checkout',
    element: Checkout,
  },
  {
    path: '/success',
    element: Success,
  },
  {
    path: '*',
    element: NotFound,
  },
];

export default routes;
