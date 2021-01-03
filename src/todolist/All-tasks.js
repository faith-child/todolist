
import React from 'react';
import './App.css';

class Alltaskslist extends React.Component {
    render() {
        return (
            <div className = "all-tasks" >
                <h2 className="task-list-title"> My list </h2>
                <ul className="task-list">
                    <li className="active-catergory-list">
                                        Work
                    </li>
                    <li className="active-catergory-list">
                                        Grocery
                    </li>
                    <li className="active-catergory-list">
                                        Housework
                    </li>
                </ul>
                <form>
                    <input
                        type="text"
                        className="new list"
                        placeholder="new list name"
                    >
                    </input>
                    <button className="btn list">
                                        +
                    </button>
                </form>
            </div>            
        )
    }
}

export default Alltaskslist;