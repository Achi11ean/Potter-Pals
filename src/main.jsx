import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import About from './About';
import Characters from './Characters';
import App2 from './App2';
import './index.css'
import PotterPals from "./PotterPals"
const routes = [ 
  {
    path:"/",
    element: <About />
  },
  {
    path:"/spells",
    element: <App />
  },
  {
    path:"/characters",
    element: <App2 />
  },
  {
    path:"/potterpals",
    element: <PotterPals />
  }
  ];
const router = createBrowserRouter(routes)
const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

