import React, { Component } from "react";
import "./app.css";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPerson: null,
        };
    }

    onItemSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };

    render() {
        const {
            selectedPerson,
        } = this.state;

        return (
            <div className="container">
                <Header />
                <RandomPlanet />
                <ItemList onItemSelected={this.onItemSelected} />
                <PersonDetails personId={selectedPerson} />
            </div>
        );
    }
}

export default App;
