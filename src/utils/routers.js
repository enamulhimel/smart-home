import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import Root from '../components/Root';
import Shop from '../components/Shop';
import Cart from '../components/Cart';
import About from '../components/About';
import ErrorPage from '../components/ErrorPage';
import { productsAndCartData } from '../loaders/getCart&ProductsData';

// export const myFun = () => fetch('products.json');

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: productsAndCartData,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/cart', element: <Cart /> },
      { path: '/about', element: <About /> },
    ],
  },
]);

export default router;
