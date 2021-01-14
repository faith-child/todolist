import React from "react";
import './App.css';

const TodoItem = props => {
    return(
        <div className="task">

           
                <input 
                type="checkbox" 
                checked={props.task.completed}
                onChange={()=> {
                    props.handleChange(props.task.id);
                }}
                 />
                <span ></span>
            
            <p>
                {props.task.value}
            </p>
        </div>
    );

};

export default TodoItem;