import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";

const Layout = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);
  return (
    <>
      <Navbar />
      {/* <Box sx={{ minHeight: "50vh", alignItems: "center" }}>{children}</Box> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
