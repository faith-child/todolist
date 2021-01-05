import React from 'react';
import './App.css';

class Currentlist extends React.Component{
    render(){
        return(
            <div className="todo-list">
                        <div className="todo-header">
                            <h2 className="todo-title">Work</h2>
                            <p className="task-counter"> 3 tasks remaining</p>
                        </div>
                        <div className="todo-body">
                            <div className="Tasks">
                                <input
                                    type="checkbox"
                                    id="task-1"
                                />
                                <label for="task-1">
                                    <span className="custom-checker"></span>
                                    Check emails
                                </label>
                            </div>
                            {/* task 1  */}
                            <div className="Tasks">
                                <input
                                    type="checkbox"
                                    id="task-2"
                                />
                                <label for="task-2">
                                    <span className="custom-checker"></span>
                                    Print off docs
                                </label>
                            </div>
                            {/* task 2 */}
                            <div className="Tasks">
                                <input
                                    type="checkbox"
                                    id="task-3"
                                />
                                <label for="task-3">
                                    <span className="custom-checker"></span>
                                    schedule meeting
                                </label>
                            </div>
                            {/* task 3 */}


                            <div className="adding-task">
                                <form>
                                    <input
                                        type="text"
                                        className="new task"
                                        placeholder="new task name"
                                    >
                                    </input>
                                    <button className="btn create">
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