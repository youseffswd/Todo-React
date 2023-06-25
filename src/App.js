import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function checker(mode) {
    if (mode === "dark") {
        document.documentElement.style.setProperty("--bg-color", "#181824");
        document.documentElement.style.setProperty("--todo-color", "#25273c");
        document.documentElement.style.setProperty(
            "--todo-input-color",
            "#fff"
        );
        document.documentElement.style.setProperty("--border-color", "#4d5066");
    } else {
        document.documentElement.style.setProperty("--bg-color", "#e4e5f1");
        document.documentElement.style.setProperty("--todo-color", "#fff");
        document.documentElement.style.setProperty(
            "--todo-input-color",
            "#000"
        );
        document.documentElement.style.setProperty("--border-color", "#d2d3db");
    }
}

function App() {
    useSelector(state => {
        console.log(state);
        return state
    })
    const mode = useSelector(state => state.mode.mode);
    useEffect(() => {
        checker(mode);
    }, [mode]);

    return (
        <>
            <Header />
            <section>
                <TodoList />
                <Footer />
            </section>
        </>
    );
}

export default App;
