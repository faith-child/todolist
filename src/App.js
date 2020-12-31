
import './App.css';

function App() {
  return (
    <div className="app">


      <h1>My Tasks</h1>

      <body>
        <div className="all-tasks">
          <h2 className="task-list-title">
            My list
          </h2>
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
        <div className="todo-list">
          <div className="todo-header">
            <h2 className="list-title">Work</h2>
            <p className="Task-counter"> 3 tasks remaining</p>
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
                <button className="btn task ">
                  +
                </button>
              </form>

            </div>
            <div className="deleting-task">
              <button className = "btn delete">
                Clear completed tasks
              </button>
              <button className = "btn delete">
                Delete list
              </button>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
