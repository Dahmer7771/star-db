import React, { Component } from "react";
import "./random-planet.css";
import planet from "../../images/1.jpg";

class RandomPlanet extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="random-planet card">
                <img src={planet} alt="planet" />
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <h4>Yavin IV</h4>
                        </li>
                        <li className="list-group-item">
                            Population: 123123
                        </li>
                        <li className="list-group-item">
                            Rotation period: 43
                        </li>
                        <li className="list-group-item">
                            Diameter: 100
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default RandomPlanet;
