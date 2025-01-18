import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export function Provider({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
