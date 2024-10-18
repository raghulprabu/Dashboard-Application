import React from 'react';
import "./App.css"
import PrimarySearchAppBar from './Components/Common/Navbar'
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <>
      {/* <RouterProvider router={router} /> */}

      <PrimarySearchAppBar />
      <AllRoutes />

    </>
  );
}

export default App;
