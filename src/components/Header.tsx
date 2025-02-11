import React, { useEffect, useState } from 'react';
//Images and icons
import brandLogo from "../assets/images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";
// Components
import Button from "./Button";
import NavbarItem from './NavbarItem';

const Header:React.FC = () => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

    const updateMedia = () => {
        setDesktop(window.innerWidth > 768);
      };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

  return (
    <header className='md:py-13 py-10 lg:px-42 md:px-20 px-6 flex items-center justify-between'>
        {!isDesktop ? (
            <>
            <img src={brandLogo} alt="Shortly logo" className='h-8 md:mr-4 w-30' />
            <FontAwesomeIcon icon={faBars} style={{color: "#9d9ba5",}} className='fa-xl' />
            </>
        ) : (
            <>
           <ul className='flex items-center justify-between'>
            <NavbarItem><img src={brandLogo} alt="Shortly logo" className='h-8 w-30 md:mr-4' /></NavbarItem>
            <NavbarItem>Features</NavbarItem>
            <NavbarItem>Pricing</NavbarItem>
            <NavbarItem>Resources</NavbarItem>
        </ul>

        <ul className='flex items-center justify-between'>
            <NavbarItem>Login</NavbarItem>
            <NavbarItem>
                <Button>
                    Sign Up
                </Button>
            </NavbarItem>
        </ul></>
        )}
        
    </header>
  );
}

export default Header;