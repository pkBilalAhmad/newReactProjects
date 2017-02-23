import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Li from './components/todo-list'
var root = document.getElementById("root")

class Obj extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.state = {
            tasks: [
                {
                    name: 'buy milk',
                    completed: false,
                    id: 0
                },
                {
                    name: 'buy water',
                    completed: false,
                    id: 1
                },
                {
                    name: 'buy floor',
                    completed: false,
                    id: 2
                }
            ]
        }
    }
    click(index) {
        var tasks = this.state.tasks ;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            tasks : tasks
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.tasks.map((task, index) => (
                        <Li key={index} index={index} details={task} clickHandle={this.click} />
                    ))
                }
            </div>
        );
    }
}



class Li extends Component {
    render() {
        return (
            <li onClick={() => {
                this.props.clickHandle(this.props.index)
            }} className={
                this.props.details.completed ? "completed" : ""
            }>
                {
                    this.props.details.name
                }
            </li>
        );
    }
}





ReactDOM.render(
    <Obj />,
    root
)