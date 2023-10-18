import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import { Box } from "@mui/system";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import Attendance from "./pages/Attendance";
import Leaves from "./pages/Leaves";
import MiniProj from "./pages/MiniProj";
import Appraisal from "./pages/Appraisal";
import ViewProfile from "./pages/ViewProfile";
import Login from "./pages/Login";
import ProfileForm from "./pages/ProfileForm";
import { ToastContainer } from "react-toastify";
import ViewHistory from "./pages/ViewHistory";
import StepFour from "./components/StepFour";
import DeptAppraisal from "./pages/DeptAppraisal";
import Principal from "./pages/Principal";
import Review from "./pages/Review";
import { UserContext } from "./context/UserContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const {} = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("loggedin")) {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    }
  }, []);

  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      {!isLoggedIn ? (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
          <SideBar setIsLoggedIn={setIsLoggedIn} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "#F5F6FA",
              marginTop: 8,
              overflowX: "hidden",
            }}
          >
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<ViewProfile />} />
                <Route path="/classes" element={<Classes />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/leaves" element={<Leaves />} />
                <Route path="/mini-proj" element={<MiniProj />} />
                <Route path="/appraisal" element={<Appraisal />} />
                <Route path="/edit-profile" element={<ProfileForm />} />
                <Route path="/view-history" element={<ViewHistory />} />
                <Route path="/dept_appraisal" element={<DeptAppraisal />} />
                <Route path="/all_appraisal" element={<Principal />} />
                <Route path="/feedback" element={<Review />} />
                <Route path="*" element={<h1>Page Not Found </h1>} />
              </Routes>
            </Router>
          </Box>
        </Box>
      ) : (
        <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
      {/* <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      /> */}
    </div>
  );
};

export default App;
