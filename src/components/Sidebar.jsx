import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../Pages/Data';
import "./Sidebar.css"
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <>
    <nav class="navbar navbar-expand d-flex flex-column align-item-start" id="sidebar">
        <a href="#" class="navbar-brand text-light mt-5">
            <div class="display-5 font-weight-bold">THANOS</div>
        </a>
        <ul class="navbar-nav d-flex flex-column mt-5 w-100">
            <li class="nav-item w-100">
                <a href="#" class="nav-link text-light pl-4">Home</a>
            </li>
            <li class="nav-item w-100">
                <a href="#" class="nav-link text-light pl-4">About</a>
            </li>
            <li class="nav-item w-100">
                <a href="#" class="nav-link text-light pl-4">Blog</a>
            </li>
            <li class="nav-item dropdown w-100">
                <a href="#" class="nav-link dropdown-toggle text-light pl-4" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">Service</a>
                <ul class="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                    <li><a href="#" class="dropdown-item text-light pl-4 p-2">Service 01</a></li>
                    <li><a href="#" class="dropdown-item text-light pl-4 p-2">Service 02</a></li>
                    <li><a href="#" class="dropdown-item text-light pl-4 p-2">Service 03</a></li>
                </ul>
            </li>
            <li class="nav-item w-100">
                <a href="#" class="nav-link text-light pl-4">Contact</a>
            </li>
        </ul>
    </nav>
    
    <section class="p-4 my-container">
        <button class="btn my-4" id="menu-btn">Toggle Sidebar</button>
        </section>
        
    </>
   
  )
}

export default Sidebar