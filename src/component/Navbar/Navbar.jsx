import './navbar.css'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

export default function Navbar() {

          useEffect(() => {
                    animation()

                    $(window).on('resize', function() {
                              setTimeout(function() { animation()}, 500)
                    })
                     
          }, [input])

          function animation() {
                    var tabsNewAnim = ${'#navbarSupportedContent'}
                    var activeItemNewAnim =tabsNewAnim.find('.active')
                    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight()
                    var activeWidthNewAnimwidth = activeItemNewAnim.innerWidth()
                    var itemPosNewAnimTop = activeItemNewAnim.position()
                    var itemPosNewAnimLeft = activeItemNewAnim.position()
          
                    $(.hori-selector).css({
                              "top": itemPosNewAnimTop.top + "px"
                              "left": itemPosNewAnimLeft.left + "px"
                              "height": activeWidthNewAnimHeight +"px"
                              "width": activeWidthNewAnimwidth + "px"
                    })

                    $("#navbarSupportedContent").on("click", "li", function(e) {
                              $('#navbarSupportedContent ul li').removeClass("active")

                              $(this).addClass('active')

                              activeWidthNewAnimHeight = $(this).innerHeight()
                              activeWidthNewAnimwidth = $(this).innerWidth()
                              itemPosNewAnimTop = $(this).position()
                              itemPosNewAnimLeft = $(this).position()

                              $(.hori-selector).css({
                                        "top": itemPosNewAnimTop.top + "px"
                                        "left": itemPosNewAnimLeft.left + "px"
                                        "height": activeWidthNewAnimHeight +"px"
                                        "width": activeWidthNewAnimwidth + "px"
                              })
          
                    })
          }

          return (
                    <nav className="navbar navbar-expand-lg navbar-mainbg">

                              <NavLink className= "navbar-brand navbar-logo" to="/" exact >
                                        Ephatha
                              </NavLink>

                              <button class="navbar-toggler" onClick ={ function(){setTimeout(function(){animation()})}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="fas fa-bars"></i>
                              </button>

                              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto">
                                                  <div className="hori-selector">
                                                            <div className="left"></div>
                                                            <div className="rigbt"></div>
                                                  </div>

                                                  <li className="nav-item active">
                                                            <NavLink className="nav-link" to="/" exact>
                                                                      <i className="fas fa-tachometer-alt"></i>
                                                                      Home
                                                            </NavLink>
                                                  </li>

                                                  <li className="nav-item">
                                                            <NavLink className="nav-link" to="/about" exact>
                                                                      <i className="far fa-address-book"></i>
                                                                      About
                                                            </NavLink>
                                                  </li>

                                                  <li className="nav-item">
                                                            <NavLink className="nav-link" to="/service" exact>
                                                                      <i className="far fa-clone"></i>
                                                                      Service
                                                            </NavLink>
                                                  </li>

                                                  <li className="nav-item">
                                                            <NavLink className="nav-link" to="/testimonial" exact>
                                                                      <i className="fas fa-chart-bar"></i>
                                                                      Testimonial
                                                            </NavLink>
                                                  </li>

                                                  <li className="nav-item">
                                                            <NavLink className="nav-link" to="/contact" exact>
                                                                      <i className="fas fa-copy"></i>
                                                                      Contact Us
                                                            </NavLink>
                                                  </li>

                                        </ul>
                              </div>
                    </nav>
          )
}
