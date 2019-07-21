import React, { Component } from 'react';

class TodoList extends Component {
    componentDidUpdate() {
        //this.props.inputElement.currentItem.focus();
    }
    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <form className="Task" onSubmit={this.props.addItem}>
                        <input type="text" placeholder="Task"
                                ref={this.props.inputElement}
                                value={this.props.currentItem.text}
                                onChange={this.props.handleInput}
                        />
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>
        );
    }    
}

export default TodoList;