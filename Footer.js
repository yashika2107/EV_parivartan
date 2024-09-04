import React from "react";
import './Footer.css'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer class="footer-distributed bg-blue-100 mt-20">
      <div class="footer-left">
         <Link to='/'>
            <span className="text-blue-500 font-semibold">EV parivartan</span>
          </Link>

        <p class="footer-links flex flex-row w-80 justify-between font-bold text-sm">
          <Link to='/'>
            <a class="link-1">
              Home
            </a>
          </Link>
          <Link to='/fare'>
            <a >Fare</a>
          </Link>

          <Link to='/route'>
            <a>Route</a>
          </Link>
        
          <Link to='/contact'>
            <a>Contact</a>
          </Link>
        </p>

        <p class="footer-company-name">EV parivartan © 2022</p>
      </div>

      <div class="footer-center">
        <div>
          <i class="fa fa-phone"></i>
          <p>1203345634</p>
        </div>

        <div>
          <i class="fa-regular fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>

      <div class="footer-right">
        <p class="footer-company-about">
          <span>About us</span>
          We are the team of engineers who bulid innovative solution for ev charging lanes
        </p>

        <div class="footer-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
