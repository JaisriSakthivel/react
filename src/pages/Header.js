
import React from 'react';
import {Link,Outlet} from "react-router-dom"
import "./css/header.css"

export default function Header() {
return (
    <div className='one'>
    
      <nav>
        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="about">ABOUT</Link>
            </li>
            <li>
                <Link to="contact">CONTACT</Link>
            </li>
        </ul>
      </nav>
        <Outlet/>
    </div>
  );
};


