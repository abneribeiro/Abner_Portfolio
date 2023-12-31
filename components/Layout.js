import { useDarkModeContext } from "../context/darkModeContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  const { isDarkMode } = useDarkModeContext();
  return (
    <>
      <Navbar />
      <main style={{ background: isDarkMode ? '#1f1f1f' : '#fff', transition: '0.4s ease'}}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
