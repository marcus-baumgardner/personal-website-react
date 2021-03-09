import React, {useState, useEffect} from 'react';
import { Navbar, Row, Col, Nav } from 'react-bootstrap';
import './Navbar.scss';


const MyNavbar = () => {
    
    const [ scrolled, setScrolled ] = useState(false);
    
    const handleScroll= () => {
        const offset=window.scrollY;
        if( offset > 200){
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    let navbarClasses=['navbar'];
        if(scrolled){
            navbarClasses.push('scrolled');
        }


    return (

        <Navbar expand="lg" className = {navbarClasses.join(" ")}>
        
            <Navbar.Brand className="navigation">
            <h1>About Me</h1>
            </Navbar.Brand>

        </Navbar >
        
    )
};

export default MyNavbar;