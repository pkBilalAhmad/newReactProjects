import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Li from './components/todo-item'
var root = document.getElementById("root")

class Todo extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.change = this.change.bind(this);
        this.state = {
            text : '',
            items : []
        }
    }
    change(e){
        this.setState({
            text : e.target.value
        })
    }
    submit(e){
        e.preventDefault();
        var newItem = {
            text : this.state.text,
            id : Date.now()
        }
        if(this.state.text === ''){
            alert('please Add Item first')
        }else{
            this.setState((e)=>({                        
            items : e.items.concat(newItem),
            text : ''
        }))
        }        
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={this.submit}>
                    <input type="text" value={this.state.text} onChange={this.change}/>
                    <button>Add Name</button>
                </form>
                <TodoList items={this.state.items}/>
            </div>
        );
    }
}


class TodoList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((i)=>(
                        <li key={i.id}>{i.text}</li>
                    ))
                }    
            </div>
        );
    }
}
ReactDOM.render(
    <Todo/>,
    root
)