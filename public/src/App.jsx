import { useState } from 'react'
import './App.css'
import AllRegistrations from './adminpanel/registrations/AllRegistrations';
import { BrowserRouter } from "react-router-dom";

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
