import React from "react";

class ExampleEvent extends React.Component {

    divClicked() {
        console.log('Div clicked');
    }
    
    buttonClicked(e) {
        e.stopPropagation();
        console.log('Button clicked');
    }

    render() {
        return (
            <div className='div_field'onClick={this.divClicked}>
                <button onClick={this.buttonClicked}>
                    Click me!
                </button>
            </div>
        )
    }
}

export default ExampleEvent