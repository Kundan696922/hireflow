import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Company from "./Company";
import About from "./About";
import JobDetails from "./JobDetails";
import Footer from "./Footer";
import Start from "./Start";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AuthProvider } from "./AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Redirect root to /start */}
          <Route path="/" element={<Navigate to="/start" replace />} />

          {/* Public Pages */}
          <Route path="/start" element={<Start />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Pages with Navbar layout */}
          <Route
            path="/*"
            element={
              <div>
                <Navbar />
                <main className="min-vh-100 pt-3 px-3">
                  <Routes>
                    <Route path="home" element={<Home />} />
                    <Route path="company" element={<Company />} />
                    <Route path="about" element={<About />} />
                    <Route path="job/:id" element={<JobDetails />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
