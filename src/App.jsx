import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

import AppRoutes from "./routes/AppRoutes";

import { useAppContext } from "./context/AppContext";

function App() {
  const { theme } = useAppContext();

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme !==  "dark"
    );
  }, [theme]);

  return (
    <div className="bg-[#f8f8f6] text-black dark:bg-black dark:text-white transition-colors duration-500">
      <Navbar />
      <AppRoutes />
      <WhatsAppFloat />
      <Footer />
    </div>
  );
}

export default App;