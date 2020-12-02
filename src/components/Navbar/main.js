import React, { Component } from 'react'
import { MenuItems } from "./navbar"
import './navbar.css'
import { Button} from "../Button";

class Navbar extends Component {
    constructor() {
        super(); // super allows you to access parent class's methods and allows us to use "this." in constructor().
        this.state = {
            clicked: false,
            scrolled: false,
        }
        // Note here too these bindings are necessary to make `this` work in the callback
        // In general, we use binding whenever we use "setState" when handling an event
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            this.setState({scrolled : !this.state.scrolled})
        }
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return(
            <div className='mycontainer' onScroll={this.handleScroll}>

                {/* Note here this.scroll.scrolled changes to this.state.scrolled */}
                <nav className={this.state.scrolled ? "NavbarItems Scroll" : "NavbarItems"}>
                    <h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? "fas fa-times" : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
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

}
export default Navbar