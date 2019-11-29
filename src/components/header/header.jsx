import React, { Component } from "react";
import "./header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className="header">
                <h1 className="header__title">StarDB</h1>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#"> People </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Planets </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Starships </a>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;
