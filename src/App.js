import Expire from "./components/login/Expire";
import ForgotPassword from "./components/login/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/expire" element={<Expire/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

      
    </Routes>
    </BrowserRouter>
  );
} 

export default App;
