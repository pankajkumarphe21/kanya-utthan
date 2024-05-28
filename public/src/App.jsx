import './App.css'
import { BrowserRouter } from "react-router-dom";
import AllRequests from './adminpanel/requests/AllRequests';
import AllRegistrations from './adminpanel/registrations/AllRegistrations'

function App() {

  return (
    <>
    <BrowserRouter>
      <AllRegistrations/>
    </BrowserRouter>
    </>
  )
}

export default App
