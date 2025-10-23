// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom"; // <-- important
import Header from "./layout/header";
import Footer from "./layout/footer";
import Assistant from "./layout/assistant";


/**
 * Layout Component
 * Wraps all pages with a shared Header and Footer.
 * Usage with React Router v6 nested routes:
 *   <Route element={<Layout />}>
 *     <Route path="/" element={<Home />} />
 *   </Route>
 */
const Layout = () => {
  return (
    <div className="layout-wrapper d-flex flex-column min-vh-100 relative">
      {/* Global Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow-1">
        <Outlet /> {/* <-- renders the current child route */}
      </main>
      
      {/* Global Footer */}
      <Footer />

      {/* Floating Chat Assistant */}
      <Assistant />
    </div>
  );
};

export default Layout;
