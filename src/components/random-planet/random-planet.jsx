import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";

class RandomPlanet extends Component {
    constructor(props) {
        super(props);
        this.swapiService = new SwapiService();
        this.state = {
            planet: {},
        };
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({ planet });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 1;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    };

    render() {
        const {
            planet: {
                id,
                name,
                population,
                rotationPeriod,
                diameter,
            },
        } = this.state;

        return (
            <div className="random-planet card">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h4>{name}</h4>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Population: </span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation period: </span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter: </span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RandomPlanet;
