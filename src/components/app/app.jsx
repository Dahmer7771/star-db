import React, { Component } from "react";
import "./app.css";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <Header />
                <RandomPlanet />
            </div>
        );
    }
}

export default App;
