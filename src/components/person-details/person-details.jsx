import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

class PersonDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: null,
        };
        this.swapiService = new SwapiService();
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        const {
            personId,
        } = this.props;

        if (personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const {
            personId,
        } = this.props;

        if (!personId) {
            return;
        }

        this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({
                    person,
                });
            });
    }

    render() {
        const {
            person,
        } = this.state;

        if (!person) {
            return <span>Select person</span>;
        }

        const {
            person: {
                name,
                gender,
                birthYear,
                eyeColor,
            },
        } = this.state;

        return (
            <div className="person-details card">
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group">
                        <li className="list-group-item">
                            {gender}
                        </li>
                        <li className="list-group-item">
                            {birthYear}
                        </li>
                        <li className="list-group-item">
                            {eyeColor}
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PersonDetails;
