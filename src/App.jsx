import "./App.css";

import DirectionThemeProvider from "./Context/Direction";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";

import AuthLayout from "./pages/AuthLayout";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
// import Jisti from "./pages/Jisti";
import Rooms from "./pages/Rooms";
import RoomPage from "./pages/RoomPage";
import Specialists from "./pages/Specialists";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ForgetPasswordReset from "./components/Auth/ForgetPasswordReset";
import ResetPassword from "./components/Auth/ResetPassword";
import Times from "./pages/Times";
import { useSelector } from "react-redux";
import DiagnosisTimes from "./pages/DiagnosisTimes";
import Pricing from "./pages/Pricing";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCancel from "./pages/PaymentCancel";
import Addons from "./pages/Addons";
import StaffRegister from "./components/Auth/StaffRegister";
import StaffLogin from "./components/Auth/StaffLogin";
// import Meeting from "./pages/Meeting";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <DirectionThemeProvider>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Main />
            </Layout>
          }
        />
        <Route
          path="/specialists"
          element={
            <Layout>
              <Specialists />
            </Layout>
          }
        />
        <Route
          path="/pricing"
          element={
            <Layout>
              <Pricing />
            </Layout>
          }
        />
        <Route
          path="/addons"
          element={
            <Layout>
              <Addons />
            </Layout>
          }
        />

        <Route
          path="/payment/success"
          element={
            <Layout>
              <PaymentSuccess />
            </Layout>
          }
        />
        <Route
          path="/payment/cancel"
          element={
            <Layout>
              <PaymentCancel />
            </Layout>
          }
        />
        {user && (
          <Route
            path="/diagnosis-times"
            element={
              <Layout>
                <DiagnosisTimes />
              </Layout>
            }
          />
        )}
        {user?.role === "Staff" && (
          <Route
            path="/times"
            element={
              <Layout>
                <Times />
              </Layout>
            }
          />
        )}
        <Route
          path="/reset-password"
          element={
            <Layout>
              <ResetPassword />
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path="/staff-register"
          element={
            <AuthLayout>
              <StaffRegister />
            </AuthLayout>
          }
        />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/staff-login"
          element={
            <AuthLayout>
              <StaffLogin />
            </AuthLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <AuthLayout>
              <ForgotPassword />
            </AuthLayout>
          }
        />
        <Route
          path="/forgot-password-reset"
          element={
            <AuthLayout>
              <ForgetPasswordReset />
            </AuthLayout>
          }
        />
        {/* <Route path="/Meeting" element={<Meeting />} /> */}
        <Route
          path="/rooms"
          element={
            <Layout>
              <Rooms />
            </Layout>
          }
        />
        <Route path="/room/:id" element={<RoomPage />} />
        {/* <Route path="/Meeting" element={<Jisti />} /> */}
        <Route path="/verify-email" element={<VerifyEmailPage />} />
      </Routes>
    </DirectionThemeProvider>
  );
}

export default App;
