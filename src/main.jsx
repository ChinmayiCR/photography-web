import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import {Item, Cart, Contact, Gallery, Details} from './components/index.js'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CartContextProvider from "./context/CartContextProvider.jsx";

const router = createBrowserRouter([
    {path:"/", element:
                <CartContextProvider><App/></CartContextProvider>
    },
    {path:"/item/:imageId", element: <CartContextProvider><Item/></CartContextProvider>},
    {path:"/cart", element:<CartContextProvider><Cart/></CartContextProvider>},
    {path:"/details", element:<CartContextProvider><Details/></CartContextProvider>}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
