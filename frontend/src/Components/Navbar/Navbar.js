import React, {useState, useEffect} from 'react';
import './Navbar.scss';


const Navbar = () => {
    
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
        <navbar className = {navbarClasses.join(" ")}>
            
            <div className="logo">
                {/* logo */}
            </div>
            <nav className="navigation">
                <h1>About Me</h1>
            </nav>

        </navbar >
    )
};

export default Navbar;