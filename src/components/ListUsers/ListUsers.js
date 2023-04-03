import React from "react";
import { v4 } from "uuid";
import ArrayItem from "../ArrayItem/ArrayItem";

class ListUsers extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ol>
                {this.props.list.map( item => {
                    const id = v4();
                    return <ArrayItem key={id} item={item}/>
                })}
            </ol>
        )
    }

}

export default ListUsers