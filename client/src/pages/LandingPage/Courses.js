import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/cart/actions/action.js";
import "./App.css"
import slider1 from "./slider_1.jpg";
import slider2 from "./slider_3.jpg";
import Sidebar from '../../components/Sidebar/Sidebar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>


        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                    Buy Now
                  </Link>
                  <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
        <div className="header-container container-fluid bg-light">
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-12">
                 <a href = "/home">      <img src="assets/images/logo.png" alt=""  /></a> 
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
                                <a className="nav-link text-white" href="/home">Home </a>
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
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">Cart</a>
                            </li>
                          
                            <li className="nav-item">
                            <Sidebar Icon={ExitToAppIcon} title={('Logout')}/>
                            </li>
                            <li className="nav-item">
                            <Sidebar Icon={ExitToAppIcon} title={('LogIn')}/>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    </div><br /> <br /> <br /> <br /> <br /> <br /> <br /> 
      <div className="container">       
        <div className="row mt-3">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Courses</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
