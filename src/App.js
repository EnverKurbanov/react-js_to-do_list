import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  state = {
    todoList : []
  }

  render(){
  return (
    <div>
    <div className="jumbotron jumbotron-fluid py-2">
      <div className="container">
        <h1 className="display-2 ">Todo App</h1>
      </div>
    </div>
    <form className="mb-3" onSubmit={this.handleSubmit}>
      <div className="input-group">
        <input type="text" name="todoTask" className="form-control" placeholder="Please enter your task" autoComplete="off"/>
        <div className="input-group-append">
          <button type = "submit" className="btn btn-outline-success">Add</button>
        </div>
      </div>
      </form>
      
      <ul className="list-group">
        {
          this.state.todoList.map(
            (item, index) => {
              return <li className="list-group-item" key={index}>
                {item}
                <button className="btn btn-sm btn-outline-danger float-right" onClick={(Event) => {this.deleteTodoTask(Event,index)}}>Delete</button>
              </li>

            }
          )
        }
      </ul>
      
      </div>

  );
}

handleSubmit = (Event)=> {
  var taskDesc = Event.target.elements.todoTask.value;
  if(taskDesc.length>0){
    this.setState({
      todoList:[...this.state.todoList, taskDesc]
    })
    Event.target.reset();
  }
Event.preventDefault();
}
 deleteTodoTask = (Event,index) => {
  var taskArray = [...this.state.todoList]
  taskArray.splice(index,1)
  this.setState({todoList:taskArray})
 }
}

export default App;
