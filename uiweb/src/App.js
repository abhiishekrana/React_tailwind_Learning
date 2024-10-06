import './App.css';
import { Suspense,lazy } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Error from './components/Error';
import Kid from './components/Kid';
import Men from './components/Men';
import ProductDeatail from './components/ProductDeatail';
import About from './components/About';
// import Grocery from './components/Grocery';

const Grocery = lazy(()=>import('./components/Grocery'))
function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet/>
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <ProductCard />,
      },
      {
        path: "/kid",
        element: <Kid />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> ,
      },
      {
        path: "/men",
        element: <Men />,
      },{
        path: "/product/:id",
        element: <ProductDeatail />,
      },
    ],

      errorElement: <Error />
    
  
  },
]);

// Wrap the RouterProvider in a functional component
const Root = () => {
  return <RouterProvider router={appRouter} />;
};

// Export the functional component
export default Root;


// React CleanUp
// it is used when our component is not used 
// properly