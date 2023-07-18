
import iconCheck from "../../images/icon-check.svg";
import iconCross from "../../images/icon-cross.svg";
import { todosActions } from "../../store";
import { useDispatch } from "react-redux";
import {motion} from "framer-motion"




const todoVariants = {
    hidden: {
        x:-300,
        opacity:0
    },
    visible: {
        x:0,
        opacity: 1,
        transition: {
            type: "spring"
        }
    },
    exit: {
        x: 300,
        opacity:0
    }
}



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
        <motion.div
            layout
            variants={todoVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
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
        </motion.div>
    );
};

export default TodoItem;
