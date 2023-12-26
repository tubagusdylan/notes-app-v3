import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { getAccessToken } from "./utils/network-data";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PageNotFound from "./pages/PageNotFound";
import ThemeContext from "./utils/ThemeContext";

function App() {
  const [isLoged, setIsLoged] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  useEffect(() => {
    if (getAccessToken() !== null) {
      setIsLoged(true);
    }

    return () => {
      setIsLoged(false);
    };
  }, []);

  return (
    <>
      <ThemeContext.Provider value={themeContextValue}>
        <Routes>
          <Route path="/" element={<Layout isLoged={isLoged} />}>
            {isLoged ? (
              <>
                <Route index element={<HomePage />} />
              </>
            ) : (
              <>
                <Route index element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
              </>
            )}
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
