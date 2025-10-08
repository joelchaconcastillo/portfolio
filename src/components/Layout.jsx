// src/components/Layout.jsx
import React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
/**
 * Layout Component
 * Wraps all pages with a shared Header and Footer.
 * Usage:
 *   <Layout>
 *     <YourPageContent />
 *   </Layout>
 */
const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper d-flex flex-column min-vh-100">
      {/* Global Header */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow-1">{children}</main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
