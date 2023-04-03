import React from "react";
import ArrayItem from "../ArrayItem/ArrayItem";
import { v4 } from "uuid";

class TwoLists extends React.Component {
    constructor(props) {
        super(props);
        this.handleMove = this.handleMove.bind(this);
        this.state = {
            list1: this.props.firstList,
            list2: this.props.secondList,
            isVisible: true,
        };
    }

    handleMove() {
        if (this.state.list1.length == 0) {
            this.setState({isVisible: false});
            return;
        }
        const firstItem = this.state.list1[0];
        const newFirstList = this.state.list1.slice(1);
        const newSecondList = [... this.state.list2, firstItem];

        this.setState({list1: newFirstList, list2: newSecondList});
    }

    render() {
        return (
            <div className="two-lists">
                {!this.state.isVisible && 
                <div className="two-lists__div">
                    <h1>That's all</h1>
                </div>
                }
                {this.state.isVisible &&
                    <ul>
                        {this.state.list1.map(item => {
                            const id = v4();
                            return <ArrayItem key={id} item={item} />
                            }
                        )}
                    </ul>
                }
                <button onClick={this.handleMove}>Move item</button>
                <ul>
                    {this.state.list2.map(item => {
                        const id = v4();
                        return <ArrayItem key={id} item={item} />
                        }
                    )}
                </ul>
            </div>
        )
    }
}

export default TwoLists