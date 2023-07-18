import { useState } from "react";
import Todos from "./Todos";
import TodosFilter from "./TodosFilter";


const TodoList = () => {
    const [currentFilter, setCurrentFilter] = useState("All");
    return (
        <div className="container">
            <div className="todos-container">

                    <Todos curFilter={currentFilter} />

                <TodosFilter
                    curFilter={currentFilter}
                    updateFilter={setCurrentFilter}
                />
            </div>
        </div>
    );
};

export default TodoList;
