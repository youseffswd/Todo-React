import moonIcon from "../../images/icon-moon.svg";
import sunIcon from "../../images/icon-sun.svg";
import { useDispatch, useSelector } from "react-redux";
import { modeActions } from "../../store";
const ToggleMode = () => {
    const dispatch = useDispatch()
    const mode = useSelector(state => state.mode.mode)
    return (
        <button
            id="toggle-moon-light"
            data-mode="light"
            onClick={() =>
                dispatch(modeActions.toggleMode())
            }
        >
            <img src={mode === "light" ? moonIcon : sunIcon} alt="" />
        </button>
    );
};

export default ToggleMode;
