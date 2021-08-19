import React from 'react';
import './Productos.css';

class ItemCouts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 1 };
    }

    onIncrease() {
        
            if(this.state.number < 5){
                this.setState({ number: this.state.number + 1 });
            }

    };
    

    onDecreae() {
        if(this.state.number >1){
            this.setState({ number: this.state.number - 1 });
        }
    }

    render() {
        return (
        <div className="contador">
            <button onClick={this.onIncrease.bind(this)}> + </button>
            <p>{this.state.number}</p>
            <button onClick={this.onDecreae.bind(this)}> - </button>
            
        </div>
        );
    }
}

export default ItemCouts;

