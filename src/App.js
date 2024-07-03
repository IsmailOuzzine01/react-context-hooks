import { useState } from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import { ThemeContext } from "./contexts/ThemeContext";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true)
  const themeProps = {
      isLightTheme,
      light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
      dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
  }
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const toggleAuth = () => setIsAuthenticated(!isAuthenticated);
  return (
    <AuthContext.Provider value={{isAuthenticated, toggleAuth}}>
      <ThemeContext.Provider value={{...themeProps}}>
        <div className="App">
          <Navbar />
          <BookList />
          <button onClick={() => setIsLightTheme(!isLightTheme)}>Change Theme</button>
        </div>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
