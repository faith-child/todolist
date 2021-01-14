import React, {Component} from 'react';
import './App.css';
import TodoItem from './TodoItem';

class Currentlist extends Component{

    constructor(props) {
        super(props);
        this.state ={
            newTask:"",
            list: [],
            
        };

        
    }
    

    updateInput(key,value){
        
        this.setState({ [key]: value});
    }

    addTask(){
        // create a task list with a unique id
        const newTask={
            id: 1 + Math.random(),
            value: this.state.newTask.slice()
        }

        const list = [...this.state.list];

        list.push(newTask);

        this.setState({
            list,
            newTask:""
        })
    }


  handleChange = id => {
    console.log(id);
    this.setState(prevState => {
        const updatedTask = prevState.list.map(task =>{
            if (task.id === id){
                return{...task, completed: !TodoItem.completed};
            }
            return task;
        });
        console.log(updatedTask);
        return{
            list: updatedTask
        };
    })
  }
    render(){
        const todoTaskComponents = this.state.list.map(task => { 
            return(
                <TodoItem key={task.id} task={task} handleChange={this.handleChange}/>
            );
        });
        
        return(
            <div className="todo-list">
                        <div className="todo-header">
                            <h2 className="todo-title" >Work</h2>
                            <p className="task-counter"> 3 tasks remaining</p>
                        </div>

                       
                        <div className="todo-body">
                             <div className="task">
                                 {todoTaskComponents}
                             </div>
                        <div className="adding-task">
                            <form>
                                <input
                                    type="text"
                                    className="new task"
                                    placeholder="new task name"
                                    value={this.state.newTask}
                                    onChange={e => this.updateInput("newTask", e.target.value)}
                                >
                                </input>
                                <button
                                    type="button"
                                    className="btn create" 
                                    onClick={()=> this.addTask()}
                                    disabled={!this.state.newTask.length}
                                >
                                    +
                                </button>
                            </form>

                        </div>
                            <div className="deleting-task">
                                <button className="btn delete">
                                    Clear completed tasks 
                                </button>

                                <button className="btn delete">
                                    Delete list
                                </button>
                            </div>
                        </div>
            </div>
        )
    }
}
export default Currentlist;