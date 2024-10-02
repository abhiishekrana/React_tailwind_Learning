import './App.css';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Error from './components/Error';
import Kid from './components/Kid';
import Men from './components/Men';
import ProductDeatail from './components/ProductDeatail';

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
