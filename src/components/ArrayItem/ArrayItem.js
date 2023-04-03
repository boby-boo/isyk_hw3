import React from "react";

class ArrayItem extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <li>{this.props.item}</li>
        )
    }
}

export default ArrayItem