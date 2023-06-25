import { useState } from "react";
import Swal from "sweetalert";
import { ACTIVE } from "../TodoList/filter-types";
import { useDispatch } from "react-redux";
import { todosActions } from "../../store";
const AddTodoForm = () => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        if (value === "") {
            Swal("You Must Add Value To Input", "", "error");
            return;
        }
        dispatch(
            todosActions.addTodo({
                id: value + Math.random(),
                value,
                status: ACTIVE,
            })
        );
        setValue("");
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                type="text"
            />
            <button type="submit">+</button>
        </form>
    );
};

export default AddTodoForm;
