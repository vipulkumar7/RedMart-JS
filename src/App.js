import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { useDispatch, } from "react-redux";
// import { loadUser } from './redux/auth/authActions'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './routing/PrivateRoute'
import PublicRoute from './routing/PublicRoute'

import Loader from './Component/Loader';
// import Home from './Component/Home';
// import Products from './Component/Products';
// import ProductDetails from './Component/ProductDetails';
// import Cart from './Component/Cart';
// import Account from './Component/Account';
// import Login from './Component/Login';
// import About from './Component/About';


const Home = lazy(() => import('./Component/Home'));
const Products = lazy(() => import('./Component/Products'));
const ProductDetails = lazy(() => import('./Component/ProductDetails'));
const Cart = lazy(() => import('./Component/Cart'));
const Account = lazy(() => import('./Component/Account'));
const Login = lazy(() => import('./Component/Login'));
const About = lazy(() => import('./Component/About'));
// const Contact = lazy(() => import('./Component/Contact'));

const App = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <ToastContainer autoClose={1000} />
      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path='/' restricted={false} component={Home} />
          <PrivateRoute path='/products' restricted={true} component={Products} />
          <PrivateRoute path='/product/:id' restricted={true} component={ProductDetails} />
          <PrivateRoute path='/cart' component={Cart} />
          <PublicRoute path='/signup' restricted={false} component={Account} />
          <PublicRoute path='/login' restricted={true} component={Login} />
          <PrivateRoute path='/about' restricted={true} component={About} />
          {/* <PrivateRoute path='/contact' component={Contact} /> */}
          <Route path='**' component={NoPageFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

const NoPageFound = () => {
  return <h1>404 Page not found</h1>;
};

export default App;
