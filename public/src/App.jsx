import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import SignIn from "./Components/signin.jsx";
import SignUp from "./Components/signup.jsx";
import AllRequests from "./adminpanel/requests/AllRequests.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
      <AllRequests/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

