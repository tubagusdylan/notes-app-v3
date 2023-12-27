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
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (getAccessToken() !== null) {
      setIsLoged(true);
    }
    setIsLoading(false);
    return () => {
      setIsLoged(false);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [theme]);

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

  if (isLoading) {
    return null;
  }

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
