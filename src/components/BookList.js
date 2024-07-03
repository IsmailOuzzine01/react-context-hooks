import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function BookList() {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext.isLightTheme ? themeContext.light : themeContext.dark;
    return (
        <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
            <ul>
                <li style={{color: theme.syntax, background: theme.ui}}>the way of kings</li>
                <li style={{color: theme.syntax, background: theme.ui}}>the name of the wind</li>
                <li style={{color: theme.syntax, background: theme.ui}}>the final empire</li>
            </ul>
      </div>
    );
  }
  
export default BookList;