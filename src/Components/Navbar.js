import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark border-body" data-bs-theme="dark">
        <div className="container">
            <a className="navbar-brand fs-4" href="/">EREN</a>
            <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas sidebar offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header text-light border-bottom">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/Products">Products</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/Collection">Collection</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/About">About</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/Contact">Contact</a>
                </li>
                <li className="nav-item mx-2">
                    <a className="nav-link" href="/Contact"><i class="bi bi-bag"></i></a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
