
import iconCheck from "../../images/icon-check.svg";
import iconCross from "../../images/icon-cross.svg";
import { todosActions } from "../../store";
import { useDispatch } from "react-redux";
const TodoItem = ({ todo }) => {
    const dispatch = useDispatch()


    const todoClickHanlder = () => {
        dispatch(todosActions.editTodo(todo.id))
    };
    const crossClickHandler = e => {
        e.stopPropagation();
        dispatch(todosActions.deleteTodo(todo.id))
    };
    return (
        <div
            onClick={todoClickHanlder}
            className={`todo ${todo.status === "Completed" && "completed"}`}
        >
            <div className="checker">
                <span>
                    <img src={iconCheck} alt="" />
                </span>
            </div>
            <p>{todo.value}</p>
            <button onClick={crossClickHandler} className="remove">
                <img src={iconCross} alt="" />
            </button>
        </div>
    );
};

export default TodoItem;
