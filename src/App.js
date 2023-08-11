import { useState } from "react";
import Expire from "./components/login/Expire";
import ForgotPassword from "./components/login/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserManagement from "./pages/UserManagement";
import ServiceManagement from "./pages/PreBookingServiceManagement";


function App() {
  const [page, setPage] = useState(-1)
  const [subPage, setSubPage] = useState(-1)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/expire" element={<Expire/>}/>
      <Route path="/dashboard" element={<Dashboard page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>
      <Route path="/usermanagement" element={<UserManagement page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>
      <Route path="/servicemanagement/pre-booking" element={<ServiceManagement page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>
      
    </Routes>
    </BrowserRouter>
  );
} 

export default App;
