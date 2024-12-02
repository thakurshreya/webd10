import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { setUser } from "./features/user/userSlice";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Job from "./pages/Job/Job";
import Login from "./pages/Login/Login";
import Gallery from "./pages/Gallery/Gallery";
import AddJobs from "./pages/Admin/AddJobs";
import AdminPage from "./pages/Admin/ListEmployees";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  }, [dispatch]);
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

        <Route
          path="/about"
          element={user?.type === "employee" ? <About /> : <Navigate to="/" />}
        />
        <Route
          path="/jobs"
          element={user?.type === "employee" ? <Job /> : <Navigate to="/" />}
        />
        <Route
          path="/contact"
          element={
            user?.type === "employee" ? <Contact /> : <Navigate to="/" />
          }
        />
        <Route
          path="/gallery"
          element={
            user?.type === "employee" ? <Gallery /> : <Navigate to="/" />
          }
        />

        <Route
          path="/employeeslist"
          element={user?.type === "admin" ? <AdminPage /> : <Navigate to="/" />}
        />
        <Route
          path="/add-jobs"
          element={user?.type === "admin" ? <AddJobs /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
