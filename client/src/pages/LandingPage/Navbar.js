import React from 'react'

const Navbar = () => {
  return (
    <div>
           <div className="header-container container-fluid bg-light">
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                        <img src="assets/images/logo.png" alt=""/>
                        <button className="navbar-toggler d-lg-none d-md-block " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div className="col-lg-9 d-none d-lg-block ">
                        <ul>
                            <li className='text-dark'><i className="far fa-envelope"></i> misbah7370@gmail.com</li>
                            <li className='text-dark'><i className="fas fa-headphones-alt"></i> +189 8162 9287</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="menu-jk" className="header-bottom contaienr-fluid">
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-light">



                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/About">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Courses1">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/News">Latest News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Contact">Contact Us</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Navbar
