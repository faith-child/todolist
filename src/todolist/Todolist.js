
import React from 'react';
import ReactDOM from 'react-dom';
import Currentlist from './Current-list.js';
import Alltaskslist from './All-tasks.js';
import './App.css';


class Todolist extends React.Component {
    render() {
        return (
            <div className="app">
                <h1 className="title">
                    To do list
                </h1>
                <Alltaskslist/>
                <Currentlist/>
            </div>
                
        
        )
    }
}
export default Todolist;
ReactDOM.render(<Todolist/>,document.getElementById('root'));