import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import SignIn from "./Components/signin.jsx";
import SignUp from "./Components/signup.jsx";
import AllRequests from "./adminpanel/requests/AllRequests.jsx";
import ApproveRequests from "./adminpanel/requests/ApproveRequests.jsx";
import AllRegistrations from "./adminpanel/registrations/AllRegistrations.jsx";
import ApproveRegistrations from "./adminpanel/registrations/ApproveRegistrations.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/registrations" element={<AllRegistrations />} />
          <Route
            path="/edit/:i"
            element={<ApproveRegistrations />}
          />
          <Route
            path="/approve/requests/:i"
            element={<ApproveRequests />}
          />
          <Route path="/requests" element={<AllRequests />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
