
import React from 'react';
import './App.css';

class Alltaskslist extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            newItem: "",
            list: []
        }
    };

    updateInput(key,value){
        
        this.setState({ [key]: value});
    }

    addItem(){
       
        //create list with unique id
        const newItem={
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };
        // copy of current list
        const list = [...this.state.list];

        // add new list to the list
        list.push(newItem);

        //update state with new list and reset newList input
        this.setState({
            list,
            newItem: ""
            
            });
            console.log('hi')
        }


    deleteItem(id) {
        // copy current list of items
        const list = [...this.state.list];
        // filter out the item being deleted
        const updatedList = list.filter(item => item.id !== id);
    
        this.setState({ list: updatedList });
      }

    render() {
        return (
            <div className = "all-tasks" >
                <h2 className="task-list-title"> My list </h2>
                
                <form>
                    <input
                        type="text"
                        className="new list"
                        placeholder="new list name"
                        value={this.state.newItem}
                        onChange={e => this.updateInput("newItem", e.target.value)}
                    />
                    
                    <button 
                        className="btn create"
                        onClick={()=> this.addItem()}
                        disabled={!this.state.newItem.length}
                    >
                                        +
                    </button>
                
                </form>
                <ul className="task-list">
                    {this.state.list.map(item => {
                        return (
                            <li key={item.id}>
                                {item.value}   
                            </li>
                        );
                    })}
                </ul>
            </div>            
        )
    }
}

export default Alltaskslist;