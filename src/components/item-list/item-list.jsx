import React, { Component } from "react";
import "./item-list.css";

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ul className="list-group category-items-list">
                <li className="list-group-item">
                    1 item
                </li>
            </ul>
        );
    }
}

export default ItemList;
