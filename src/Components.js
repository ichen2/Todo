import React from 'react';

export class Header extends React.Component {
    render() {
      return <h1 className="title">TODO:</h1>;
    }
}

export class List extends React.Component {
    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = { tasks: [], new: "" };
    }
    addTask() {
        if(this.state.new !== "") {
            this.setState(prevState => ({
                tasks: [...prevState.tasks, this.state.new],
                new: ""
            }))
        }
    }
    handleChange(event) {
        this.setState({new: event.target.value});
    }
    render() {
        if(this.state.tasks.length > 0) {
            return (
            <div>
                <ul>
                    {this.state.tasks.map((task) => <li key={task}>{task}</li>)}
                </ul>
                <br />
                <Add onClick={this.addTask}/>
                <br />
                <Field value={this.state.new} onChange={this.handleChange}/>
            </div>
            );
        }
        else {
            return (
                <div>
                    <Add onClick={this.addTask}/>
                    <br />
                    <Field value={this.state.new} onChange={this.handleChange}/>
                </div>
            );
        }
    }
}

export class Add extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>Add Item</button>
    }
}

export class Field extends React.Component {
    render() {
        return <input value={this.props.value} onChange={this.props.onChange} type="text" />
    }
}