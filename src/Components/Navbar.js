import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav id='navbar' className="navbar navbar-expand-lg navbar-dark sticky-top border-body" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand fs-4" href="/" >EREN</a>
          <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas sidebar offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header text-light border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">EREN</h5>
              <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#featured" >Collection</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#blogs" >Blogs</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#contact" >Contact</a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#contact" ><i className="bi bi-bag"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
