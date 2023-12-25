import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAccessToken } from "./utils/network-data";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [isLoged, setIsLoged] = useState(false);

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
    </>
  );
}

export default App;
