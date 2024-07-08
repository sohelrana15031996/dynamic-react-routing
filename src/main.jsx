import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
        {
          path:'/about',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/albums'),
          element:<About/>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/users',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
          element:<Users></Users>,
        },
        {
          path:'/users/:userID',
          loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
          element:<UserDetails></UserDetails>

        }

    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
