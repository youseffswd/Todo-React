import {useSelector} from "react-redux";
import lightImg from "../../images/bg-desktop-light.jpg"
import darkImg from "../../images/bg-desktop-dark.jpg"
import AddTodoForm from "./AddTodoForm";
import ToggleMode from "./ToggleMode";

const Header = () => {
    const mode = useSelector(state => state.mode.mode)
    return (
        <header style={{backgroundImage: mode === "light" ? `url(${lightImg})` : `url(${darkImg})`}}>
            <div className="container">
                <div>
                    <h1>TODO</h1>
                    <ToggleMode />
                </div>
                <AddTodoForm />
            </div>
        </header>
    );
};

export default Header;
