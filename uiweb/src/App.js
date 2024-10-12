// import './App.css';
import { Suspense,lazy } from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import Error from './components/Error';
import Kid from './components/Kid';
import Men from './components/Men';
import ProductDeatail from './components/ProductDeatail';
import About from './components/About';
import { useState } from 'react';
import UserContest from './utils/UserContext';
import {Provider} from 'react-redux'
// import Grocery from './components/Grocery';
import appStore from './store/store';
import Cart from './components/Cart';

const Grocery = lazy(()=>import('./components/Grocery'))
function App() {
  const [userName,setUserName] = useState("Abhishek");
  return (
    <Provider store={appStore}>
    <UserContest.Provider value={{name:userName,setUserName}}>
    <div className="App">
      <Navbar />
      <Outlet/>
    </div>
    </UserContest.Provider>
    </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart/>,
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