
import { todosActions } from "../../store";
import { ALL,ACTIVE,COMPLETED } from "./filter-types";
import { useDispatch, useSelector } from "react-redux";
const filters = [ALL, ACTIVE, COMPLETED];

const TodosFilter = ({ updateFilter, curFilter }) => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos)
    const clickHandler = filter => {
        updateFilter(filter);
    };
    const clearCompletedHandler = () => {
        dispatch(todosActions.clearCompleted())

    }
    return (
        <div className="todos-filter">
            <div className="items-count">
                <span id="count">
                    {
                        todos.filter(todo => todo.status === ACTIVE)
                            .length
                    }
                </span>
                items left
            </div>
            <div className="filter-controls">
                {filters.map(item => (
                    <button
                        key={item}
                        data-filter={item}
                        className={curFilter === item ? "active" : ""}
                        onClick={clickHandler.bind(null, item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="clear-completed">
                <button onClick={clearCompletedHandler}>Clear Completed</button>
            </div>
        </div>
    );
};

export default TodosFilter;
