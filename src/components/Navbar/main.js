import React, { useState} from 'react'
import { MenuItems } from "./navbar"
import './navbar.css'
import { Button} from "../Button";

function Navbar() {
    const [clicked,setClick] = useState(false);
    const [navbar,setNavbar] = useState(false);
    const handleClick = () => setClick(!clicked);

    const changeBackground = () => {
        if (window.scrollY > 20){
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll',changeBackground)
    return (
        <div className='mycontainer'>
            {/* Note here this.scroll.scrolled changes to this.state.scrolled */}
            <nav className={navbar ? "NavbarItems Scroll" : "NavbarItems"}>
                <h1 className="navbar-logo">Farhandika <i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItems.map((items, index) => {
                            return (
                                <li key = {index}><a className={items.cName} href={items.url}>
                                    {items.title}
                                </a></li>
                            );
                        })
                    }
                </ul>
            </nav>

        </div>
    );
}

export default Navbar