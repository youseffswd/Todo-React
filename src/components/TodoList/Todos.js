import TodoItem from "./TodoItem";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { ACTIVE } from "./filter-types";
import { useSelector } from "react-redux";
const Todos = ({ curFilter }) => {
    const pureTodos = useSelector(state => state.todos.todos);
    let todos = pureTodos.map(todo => <TodoItem key={todo.id} todo={todo} />);
    let empty = "There is nothing to do";
    if (curFilter !== "All") {
        todos = pureTodos
            .filter(item => item.status === curFilter)
            .map(todo => <TodoItem key={todo.id} todo={todo} />);

        if (curFilter !== ACTIVE) empty = "There is nothing Completed";
    }

    return (
        <LayoutGroup>
            <motion.div style={{justifyContent: todos.length === 0 ? "center" : "flex-start"}} transition={{ staggerChildren: 0.5 }} className="todos">
                <AnimatePresence>
                    {todos.length === 0 ? (
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            className="empty"
                        >
                            {empty}
                        </motion.div>
                    ) : (
                        todos
                    )}
                </AnimatePresence>
                {/* Todo item */}
            </motion.div>
        </LayoutGroup>
    );
};

export default Todos;
