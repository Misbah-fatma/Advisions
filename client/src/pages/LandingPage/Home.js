
import React, { useState } from 'react';
import "./App.css"
import slider1 from "./slider_1.jpg";
import slider2 from "./slider_3.jpg";
import Sidebar from '../../components/Sidebar/Sidebar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Home = () => {
    
  return (
    <div >
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
    </div>



    <div className="slider-detail">

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item ">
                    <img className="d-block w-100" src={slider1} alt="First slide"/>
                    <div className="carousel-caption fvgb d-none d-md-block">
                        <h5 className="animated bounceInDown">Grow your Business with Smarteye</h5>
                        <p className="animated bounceInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, <br/>
                            aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br/>
                            sed sagittis at, sagittis quis neque. Praesent.</p>

                        <div className="row vbh">

                            <div className="btn btn-success animated bounceInUp"> Book an Appointment </div>
                        </div>
                    </div>
                </div>

                <div className="carousel-item active">
                    <img className="d-block w-100" src={slider2} alt="Third slide"/>
                    <div className="carousel-caption vdg-cur d-none d-md-block">
                        <h5 className="animated bounceInDown">Misbah Fatma</h5>
                        <p className="animated bounceInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, <br/>
                            aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br/>
                            sed sagittis at, sagittis quis neque. Praesent.</p>

                        <div className="row vbh">

                            <div className="btn btn-success animated bounceInUp"> Book an Appointment </div>
                        </div>
                    </div>
                </div>

            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>


    </div>
  
       
        <div className="key-feature container-fluid">
           <div className="container">
              <div className="session-title row">
                  <h2>Key Feat Features</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
              </div>
               <div className="row">
                   <div className="col-md-3 key-div">
                       <div className="key-cover">
                           <i className="far fa-file-word"></i>
                           <h4>Programing Experts</h4>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit  </p>
                       </div>
                   </div>
                   <div className="col-md-3 key-div">
                       <div className="key-cover">
                           <i className="far fa-clock"></i>
                           <h4>Timely Delivery</h4>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit  </p>
                       </div>
                   </div>
                   <div className="col-md-3 key-div">
                       <div className="key-cover">
                           <i className="fas fa-object-group"></i>
                           <h4>Quality Design</h4>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit  </p>
                       </div>
                   </div>
                   <div className="col-md-3 key-div">
                       <div className="key-cover">
                           <i className="fas fa-phone-volume"></i>
                           <h4>24 x 7 Suport</h4>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit  </p>
                       </div>
                   </div>
               </div>
           </div>
       </div>


        <div className="testimonial-container contaienr-fluid">
            <div className="container">
                <div className="session-title row">
                  <h2>What People Say about Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
                </div>
                <div className="test-row row">
                    <div className="col-md-6">
                        <div className="test-card">
                            <div className="image">
                                <img src="assets/images/testimonial/member-01.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Krisinan Kumar</h3>
                                <p>Vestibulum consequat ligula sit amet ligula mollis consequat  In consequat tincidunt risus. pellentesque pulvinar. Suspendisse congue a diam in volutpat. Nullam maximus, lectus </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="test-card">
                            <div className="image">
                                <img src="assets/images/testimonial/member-02.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Steve Smith</h3>
                                <p>Vestibulum consequat ligula sit amet ligula mollis consequat  In consequat tincidunt risus. pellentesque pulvinar. Suspendisse congue a diam in volutpat. Nullam maximus, lectus </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="test-card">
                            <div className="image">
                                <img src="assets/images/testimonial/member-03.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Adel Reshide</h3>
                                <p>Vestibulum consequat ligula sit amet ligula mollis consequat  In consequat tincidunt risus. pellentesque pulvinar. Suspendisse congue a diam in volutpat. Nullam maximus, lectus </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="test-card">
                            <div className="image">
                                <img src="assets/images/testimonial/member-04.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Jonney Smith</h3>
                                <p>Vestibulum consequat ligula sit amet ligula mollis consequat  In consequat tincidunt risus. pellentesque pulvinar. Suspendisse congue a diam in volutpat. Nullam maximus, lectus </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>


   

         <div id="about" className="about-company">
          <div className="container">
              <div className="row">
                 <div className="col-md-6">
                   <div className="detail">
                       <h3>About Company</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit mi, sed convallis nisi eleifend eget. Morbi vel magna odio. Lorem ipsum dolor consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est  consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est ipsum dolor sit arcu.</p>
                       <p>Ut ullamcorper ac eros nec molestie. Curabitur luctus dui fringilla magna laoreet lacinia. Pellentesque velit ante, convallis quis justo vel, condimentum tempus diam. Donec vitae pretium lectus. Nullam faucibus nulla sit amet tincidunt gravida. Maecenas posuere pharetra tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent molestie lectus in arcu pharetra pulvinar. Donec cursus diam id quam accumsan maximus. Morbi ac tincidunt quam, quis cursus urna. Pellentesque in consectetur ante, a efficitur nisi.</p>
                   </div>
               </div>
               <div className="col-md-6">
                   <div className="imag">
                       <img src="assets/images/about.jpg" alt=""/>
                   </div>
               </div> 
              </div>
          </div>
           
       </div>


        <div className="blog-container contaienr-fluid">
            <div className="container">
                <div className="session-title row">
                  <h2>What People Say about Us</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
                </div>
                <div className="row news-row">
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_01.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Latest News about Smarteye</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_02.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Apple Launch its New Phone</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_03.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>About Windows 10 Update</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="news-card">
                            <div className="image">
                                <img src="assets/images/blog/blog_04.jpg" alt=""/>
                            </div>
                            <div className="detail">
                                <h3>Latest News about Smarteye</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit consectetur adipiscing elit. </p>
                                <p className="footp">
                                    27 Comments <span>/</span>
                                    Blog Design <span>/</span>
                                    Read More
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


 
       <div id="why" className="our-capablit container-fluid">
           <div className="layy">
               <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                       <div className="cap-det">
                        
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">80<sup className="small">%</sup></div>
                              </div>
                            </div>
                          
                           <h6>Web Design</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. </p>
                       </div>
                   </div>
                   <div className="col-md-3">
                       <div className="cap-det">
                    
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">70<sup className="small">%</sup></div>
                              </div>
                            </div>
                    
                           <h6>Android Development</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. </p>
                       </div>
                   </div>
                   <div className="col-md-3">
                       <div className="cap-det">
                      
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">90<sup className="small">%</sup></div>
                              </div>
                            </div>
                   
                           <h6>Frontend Developer</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                       </div>
                   </div>
                   
                   <div className="col-md-3">
                       <div className="cap-det">
                       
                            <div className="progress mx-auto" data-value='80'>
                              <span className="progress-left">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <span className="progress-right">
                                    <span className="progress-bar border-primary"></span>
                              </span>
                              <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                <div className="h2 font-weight-bold">60<sup className="small">%</sup></div>
                              </div>
                            </div>
                       
                           <h6>SEO & Digital Marketing</h6>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum.</p>
                       </div>
                   </div>
                  </div>
               </div>
           </div>
       </div>



    <section className="our-team team-11">
        <div className="container">
            <div className="session-title row">
                  <h2>Take a look at Our Team</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
            </div>
            <div className="row team-row">
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb1.jpg" alt=""/>
                        <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>CEO</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb2.jpg" alt=""/>
                        <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>Business Analsist</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb3.jpg" alt=""/>
                        <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>Project Manager</i>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="single-usr">
                        <img src="assets/images/team/team-memb4.jpg" alt=""/>
                        <div className="det-o">
                            <h4>David Kanuel</h4>
                            <i>Team Leader</i>
                        </div>
                    </div>
                </div>
                
                 
            </div>
        </div>


    </section>


  
    <div className="services container-fluid">
       <div className="container">
           <div className="session-title row">
                  <h2>Our Services</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit</p>
            </div>
            <div className="service-row row">
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="far fa-lightbulb"></i> UI Designing</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fab fa-android"></i> Android Development</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-fill-drip"></i> Graphic Design</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-ad"></i> Website Design</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-seedling"></i> SEO</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fas fa-at"></i> Digital Marketing</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="far fa-address-card"></i> ERP  Applications</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="service-card">
                        <h4><i className="fab fa-app-store"></i> App Development</h4>
                        <p> Donec vitae vehicula massa, vitae dignissim felis. Sed euismod tincidunt laoreet. Donec risus magna, vehicula non imperdiet nec, lacinia sit amet neque. </p>
                        <span>Read more</span>
                    </div>
                </div>
                
            </div>
       </div>
        
    </div>


   
    
     <section id="price" className="price-tab container-fluid">
        <div className="container">
           <div className="session-title row">
                 <h2>Our Pricing</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla vel nisl a dictum. Donec ut est arcu. Donec hendrerit velit mi, sed convallis nisi eleifend eget.</p>
           </div>
            <div className="row">
               
                <div className="col-md-4">
                    <div className="product-box">
                        <div className="product-popular">
                            Most Popular
                        </div>
                        <div className="product-price">
                            <div className="rokij"> $189 <p className="term"> / month</p></div>
                            
                        </div>
                        <div className="product-features">
                            
                            <ul className="smal">
                               
                                <li>
                                    Powered by cPanel®
                                </li>
                                <li>
                                    Dedicated IP Address
                                </li>
                                <li>
                                    99.95% Uptime SLA
                                </li>
                                <li>
                                    1000 Mbit Uplink
                                </li>
                                <li>
                                    <strong>10</strong> Hosted Domains
                                </li>
                                <li>
                                    <strong>25 GB</strong> RAID 10 Storage
                                </li>
                                <li>
                                    <strong>200 GB</strong> Premium Bandwidth
                                </li>
                            </ul>
                        </div>
                        <div className="product-order">
                            <a className="btn btn-success" href="products-cloud-hosting.html#cloud-starter-monthly">
                                <i className="fas fa-shopping-cart icon-left"></i>Order Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-box ultimate">
                        <div className="product-popular ppo">
                            Most Popular
                        </div>
                        
                        <div className="product-price">
                            <div className="rokij">$389 <p className="term"> / month</p></div>
                            
                        </div>
                        <div className="product-features">
                           
                            <ul className="smal">
                                <li>
                                    Powered by cPanel®
                                </li>
                                <li>
                                    Dedicated IP Address
                                </li>
                                <li>
                                    99.95% Uptime SLA
                                </li>
                                <li>
                                    1000 Mbit Uplink
                                </li>
                                <li>
                                    <strong>10</strong> Hosted Domains
                                </li>
                                <li>
                                    <strong>25 GB</strong> RAID 10 Storage
                                </li>
                                <li>
                                    <strong>200 GB</strong> Premium Bandwidth
                                </li>
                                <li>
                                    Unlimied Emaills
                                </li>
                                <li>
                                   Premium Support
                                </li>
                                <li>
                                    Daily Backup
                                </li>
                            </ul>
                        </div>
                        <div className="product-order">
                            <a className="btn btn-success" href="products-cloud-hosting.html#cloud-starter-monthly">
                                <i className="fas fa-shopping-cart icon-left"></i>Order Now
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-box">
                        <div className="product-popular">
                            Most Popular
                        </div>
                        <div className="product-price">
                            <div className="rokij">$689<p className="term"> / month</p></div>
                        </div>
                        <div className="product-features">
                            
                            <ul className="smal">
                                <li>
                                    Powered by cPanel®
                                </li>
                                <li>
                                    Dedicated IP Address
                                </li>
                                <li>
                                    99.95% Uptime SLA
                                </li>
                                <li>
                                    1000 Mbit Uplink
                                </li>
                                 <li>
                                    <strong>10</strong> Hosted Domains
                                </li>
                                <li>
                                    <strong>25 GB</strong> RAID 10 Storage
                                </li>
                                <li>
                                    <strong>200 GB</strong> Premium Bandwidth
                                </li>
                            </ul>
                        </div>
                        <div className="product-order">
                            <a className="btn btn-success" href="products-cloud-hosting.html#cloud-starter-monthly">
                                <i className="fas fa-shopping-cart icon-left"></i>Order Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    


    <footer id="contact">
    <div className="container">
        <div className="row">
            <div className="col-md-3 about">
                <h2>About Us</h2>
                <p>Phasellus scelerisque ornare nisl sit amet pulvinar. Nunc non scelerisque augue. Proin et sollicitudin velit. </p>
                
                <div className="foot-address">
                    <div className="icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="addet">
                        BlueDart
                        Marthandam (K.K District)
                        Tamil Nadu, IND 
                    </div>
                </div>
                <div className="foot-address">
                    <div className="icon">
                        <i className="far fa-envelope-open"></i>
                    </div>
                    <div className="addet">
                        info@smarteyeapps.com <br/>
                        sales@smarteyeapps.com
                    </div>
                </div>
                <div className="foot-address">
                    <div className="icon">
                         <i className="fas fa-mobile-alt"></i>
                    </div>
                    <div className="addet">
                        +23 323 43434 <br />
                        +1 3232 434 55
                    </div>
                </div>
            </div>
            <div className="col-md-3 fotblog">
                <h2>From latest Blog</h2>
                <div className="blohjb">
                    <p>dignissim. Integer tempor facilisis malesuada. Proin ac varius velit, tincidunt condimentum</p>
                    <span>22-1-2019</span>
                </div>
                <div className="blohjb">
                    <p>dignissim. Integer tempor facilisis malesuada. Proin ac varius velit, tincidunt condimentum</p>
                    <span>22-1-2019</span>
                </div>
                <div className="blohjb">
                    <p>dignissim. Integer tempor facilisis malesuada. Proin ac varius velit, tincidunt condimentum</p>
                    <span>22-1-2019</span>
                </div>
            </div>
            <div className="col-md-3 glink">
                <ul>
                    <li><a href="index.html"><i className="fas fa-angle-double-right"></i>Home</a></li>
                    <li><a href="about_us.html"><i className="fas fa-angle-double-right"></i>About Us</a></li>
                    <li><a href="services.html"><i className="fas fa-angle-double-right"></i>Services</a></li>
                    <li><a href="blog.html"><i className="fas fa-angle-double-right"></i>Blog</a></li>
                    <li><a href="pricing.html"><i className="fas fa-angle-double-right"></i>Gallery</a></li>
                    <li><a href="contact_us.html"><i className="fas fa-angle-double-right"></i>Contact Us</a></li>
                </ul>
            </div>
            <div className="col-md-3 tags">
                <h2>Easy Tags</h2>
                <ul>
                    <li>Finance</li>
                    <li>Web Design</li>
                    <li>Internet Pro</li>
                    <li>Node Js</li>
                    <li>Java Swing</li>
                    <li>Angular Js</li>
                    <li>Vue Js</li>
                </ul>
            </div>
        </div>
    </div>
</footer>
<div className="copy">
            <div className="container">
                <a href="https://www.smarteyeapps.com/">2015 &copy; All Rights Reserved | Designed and Developed by Smarteyeapps</a>
                
                <span>
                <a><i className="fab fa-github"></i></a>
                <a><i className="fab fa-google-plus-g"></i></a>
                <a><i className="fab fa-pinterest-p"></i></a>
                <a><i className="fab fa-twitter"></i></a>
                <a><i className="fab fa-facebook-f"></i></a>
        </span>
            </div>

        </div>
    </div>
  )
}

export default Home
