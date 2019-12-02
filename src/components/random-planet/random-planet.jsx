import React, { Component } from "react";
import "./random-planet.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";

class RandomPlanet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            loading: true,
            error: false,
        };
        this.swapiService = new SwapiService();
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 1;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,

        });
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    render() {
        const {
            planet,
            loading,
            error,
        } = this.state;

        const hasData = !(loading || error);
        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <Planet planet={planet} /> : null;

        return (
            <div className="random-planet card">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const Planet = ({ planet }) => {
    const {
        id,
        name,
        population,
        rotationPeriod,
        diameter,
    } = planet;

    return (
        <>
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
        </>
    );
};

export default RandomPlanet;
