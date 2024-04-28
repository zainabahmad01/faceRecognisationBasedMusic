import './App.css';
import Home from './Pages/Home/Home.jsx';
import Mood from './Pages/Mood/Mood';
import React from 'react';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Mood",
    element: <Mood/>,
  },
  
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}


export default App;
