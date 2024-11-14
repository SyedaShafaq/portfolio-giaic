"use client"
import React, { useState } from 'react';
import Nav from './nav';
import MobileNav from './mobile-nav';


const ResponsiveNav = () => {
    const [showNav,setShowNav]= useState(false)
    const  OpenNav = ( ) => setShowNav(true)
    const  CloseNav = ( ) => setShowNav(false)
    
      return (
        <div>
           <Nav openNav={ OpenNav }/>
          <MobileNav showNav={showNav} closeNav={CloseNav} />
        </div>
      )
    }
    
    export default ResponsiveNav