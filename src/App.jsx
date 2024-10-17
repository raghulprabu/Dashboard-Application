import React from 'react';
// import { RouterProvider } from 'react-router-dom';
// import {router} from "./router";
import "./App.css"
import PrimarySearchAppBar from './Components/Common/Navbar'
import AllRoutes from './Routes/AllRoutes';
import UserContext from './context/UserContext';

function App() {
  return (
    <UserContext>
      {/* <RouterProvider router={router} /> */}

      <PrimarySearchAppBar />
      <AllRoutes />

    </UserContext>
  );
}

export default App;
