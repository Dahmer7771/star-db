import React, { Component } from "react";
import "./item-list.css";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peopleList: null,
        };
        this.swapiService = new SwapiService();
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList,
                });
            });
    }

    renderItems = (array) => array.map(({ id, name }) => {
        const {
            onItemSelected,
        } = this.props;

        return (
            <li
                className="list-group-item"
                role="menuitem"
                key={id}
                onClick={() => onItemSelected(id)}
            >
                {name}
            </li>
        );
    });

    render() {
        const {
            peopleList,
        } = this.state;

        if (!peopleList) {
            return <Spinner />;
        }

        const items = this.renderItems(peopleList);

        return (
            <ul className="list-group category-items-list">
                {items}
            </ul>
        );
    }
}

export default ItemList;
