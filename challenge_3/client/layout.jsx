// make the layout here
import React from 'react';

const Layout = ({children}) => {
  return (
  // layout using hero http://bulma.io/documenatation/layout/hero
    <section className="hero is-success is-fullheight">
      {/* Hero head will stick at the top */}
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <img src="bowling-logo-vector.png" alt="Logo"></img>
            </div>
            <span className="navbar-item">
              <h1 className="title">
                   Bowling Score Keeper
              </h1>
            </span>
          </div>
        </nav>
        {/* body */}
        <div className="hero-body">
          <div className="container is-fluid">
            {/* content */}
            {children}
          </div>
        </div>
        {/* footer */}
      </div>
    </section>
  );
};

export default Layout;
