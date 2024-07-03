import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

function Navbar() {
    const themeContext = useContext(ThemeContext);
    const authContext = useContext(AuthContext);
    const {isAuthenticated, toggleAuth} = authContext;
    const theme = themeContext.isLightTheme ? themeContext.light : themeContext.dark;
    return (
        <nav style={{background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div className="navbar-authentication">
                <p>{ isAuthenticated ? 'Hello, you are authenticated !' : 'Welcome, please sign in !' }</p>
                <button onClick={toggleAuth}>{ isAuthenticated ? 'Sign out' : 'Sign in' }</button>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
export default Navbar; 