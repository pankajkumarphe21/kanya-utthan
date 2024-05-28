import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import SignIn from './Components/signin'
import SignUp from './Components/signup'
import AllRequests from './adminpanel/requests/AllRequests'

function App() {

  return (
    <>
      <BrowserRouter>
           <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/sign-up' element={<SignUp />} />
           </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
