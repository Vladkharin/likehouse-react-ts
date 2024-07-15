import "./app.css";
import "./stylePages.css";
import "./fonts/stylesheet.css";
import { MainPage } from "./components/mainPage/MainPage";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { PaymentPage } from "./components/paymentPage/paymentPage";

function App() {
  const [scroll, setScroll] = useState(0);
  const [mainPage, setMainPage] = useState(true);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Header scroll={scroll} setMainPage={setMainPage} mainPage={mainPage} />
      <Routes>
        <Route path={"/:anchor?"} element={<MainPage />} />
        <Route path={"/payment"} element={<PaymentPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
