import React, {Component}  from 'react'
import ReactDOM from 'react-dom'
import './index.css'
var root = document.getElementById("root")


class Counter extends Component {
    constructor(props){
        super(props);
        this.plus = this.plus.bind(this);
        this.minus = this.minus.bind(this)
        this.state = {nom : 0}
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.nom}
                </h1>
                <button onClick={this.plus}>+</button>
                <button onClick={this.minus}>-</button>
            </div>
        );
    }
    plus(){
        if(this.state.nom >9){
            return this.setState({
                nom : 10
            })
        }else{
            this.setState({
            nom : this.state.nom + 1
        })
        }
        
    }
    minus(){
        if(this.state.nom <1 ){
            return this.setState({
                nom : 0
            })
        }else{
            this.setState({
            nom : this.state.nom - 1
        })
        }

        
    }
}

ReactDOM.render(
    <Counter/>,
    root
)