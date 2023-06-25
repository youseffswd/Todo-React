
import TodoItem from "./TodoItem";

import { ACTIVE } from "./filter-types";
import { useSelector } from "react-redux";
const Todos = ({ curFilter }) => {
    const pureTodos = useSelector(state => state.todos.todos);
    let todos = pureTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
    ));
    let empty = "There is nothing to do"
    if (curFilter !== "All") {
        todos = pureTodos
            .filter(item => item.status === curFilter)
            .map(todo => <TodoItem key={todo.id} todo={todo} />);

            if(curFilter !== ACTIVE) empty = "There is nothing Completed"
    }

    return (
        <div className="todos">
            {todos.length === 0 ? (
                <div className="empty">
                     {empty}
                </div>
            ) : (
                todos
            )}

            {/* Todo item */}
        </div>
    );
};

export default Todos;
