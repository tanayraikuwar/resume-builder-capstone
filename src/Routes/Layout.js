import React from 'react'
import Navbar from '../components/Navbar';


function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children} {/* <Route.js/>*/}
    </>
  );
}

export default Layout;