import { useEffect, useState } from "react";
import Expire from "./components/login/Expire";
import ForgotPassword from "./components/login/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserManagement from "./pages/UserManagement";
import ServiceManagement from "./pages/PreBookingServiceManagement";
import { useSelector, useDispatch } from 'react-redux'
import {  SetDashboardTable, setDashboardTable } from "./store/reducer";
import VirtualSiteClient from "./components/servicemanagement/PrevBooking/ClientSide/VirtualSiteClient";
import PilotSideVirtual from "./components/servicemanagement/PrevBooking/Pilotside/PilotSideVirtual";
import EditClient from "./components/servicemanagement/PrevBooking/ClientSide/EditClient";
import PilotEdit from "./components/servicemanagement/PrevBooking/Pilotside/PilotEdit";
import SPA from "./components/servicemanagement/PreRegistration.js/hassleFreeRegistration/SPA";
import StampDuty from "./components/servicemanagement/PreRegistration.js/hassleFreeRegistration/StampDuty";
import Title from "./components/servicemanagement/PreRegistration.js/Title/Title";
import Sustained from "./components/servicemanagement/PreRegistration.js/sustained/Sustained";
import EditSustained from "./components/servicemanagement/PreRegistration.js/sustained/EditSustained";
import EditTitle from "./components/servicemanagement/PreRegistration.js/Title/EditTitle";
import PreDelivery from "./components/servicemanagement/PreRegistration.js/PreDeliveryInspection/PreDelivery";
import EditSPA from "./components/servicemanagement/PreRegistration.js/hassleFreeRegistration/EditSPA";
import EditClientSide from "./components/servicemanagement/PreRegistration.js/PreDeliveryInspection/EditClientSide";
import SustainedMarketing from "./components/servicemanagement/PostRegistration/sustained/SustainedMarketing";
import TDS from "./components/servicemanagement/PostRegistration/tda/TDS";
import KhataTransfer from "./components/servicemanagement/PostRegistration/khatatransfer/KhataTransfer";
import BESCOMTransfer from "./components/servicemanagement/PostRegistration/bescomtransfer/BESCOMTransfer";
import PropertyTaxTransfer from "./components/servicemanagement/PostRegistration/propertytaxtransfer/PropertyTaxTransfer";
import EditSustainedMarketing from "./components/servicemanagement/PostRegistration/sustained/EditSustainedMarketing";
import EditTDS from "./components/servicemanagement/PostRegistration/tda/EditTDS";
import EngineerSide from "./components/servicemanagement/PreRegistration.js/PreDeliveryInspection/EngineerSide";
import EditEngineerSide from "./components/servicemanagement/PreRegistration.js/PreDeliveryInspection/EditEgineerSide";
import EditKhataTransfer from "./components/servicemanagement/PostRegistration/khatatransfer/EditKhataTransfer";
import EditBESCOM from "./components/servicemanagement/PostRegistration/bescomtransfer/EditBESCOM";
import EditPropertyTaxTransfer from "./components/servicemanagement/PostRegistration/propertytaxtransfer/EditPropertyTaxTransfer";
import Notification from "./pages/Notification";
import EditStamp from "./components/servicemanagement/PreRegistration.js/hassleFreeRegistration/EditStamp";
import PersonalDetails from "./components/usermanagement/PersonalDetails";
import EditBackgroundVerification from "./components/servicemanagement/PrevBooking/EditBackgroundVerification";
import EditBackgroundDetails from "./components/servicemanagement/PrevBooking/EditBackgroundDetails";



function App() {
  const [page, setPage] = useState(-1)
  const [subPage, setSubPage] = useState(-1)
  const dashboardTable = useSelector(state => state.values.dashboardTable)

  const dispatch = useDispatch()

 
 
  // const data = [
  //   {
  //     id:1,
  //     name:"hello world",
  //   },
  //   {
  //     id:2,
  //     name:"hello world",
  //   },
  // ]
  // useEffect(()=> {
  //   dispatch(setDashboardTable(data))
  // },[])

  console.log(dashboardTable)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/expire" element={<Expire/>}/>
      <Route path="/dashboard" element={<Dashboard page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>
      <Route path="/usermanagement" element={<UserManagement page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path="/usermanagement/:id" element={<PersonalDetails page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>
      <Route path="/servicemanagement/pre-booking" element={<ServiceManagement page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>
      <Route path="/servicemanagement/pre-booking/:id" element={<EditBackgroundVerification page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path="/servicemanagement/pre-booking/edit/:id" element={<EditBackgroundDetails page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>
      <Route path="/servicemanagement/pre-booking/virtualsite/client" element={<VirtualSiteClient page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-booking/virtualsite/pilot' element={<PilotSideVirtual page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-booking/virtualsite/pilot/:id' element={<PilotEdit page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>
      <Route path='/servicemanagement/pre-booking/virtualsite/client/:id' element={<EditClient page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-registration/hasslefree/spa' element={<SPA page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>


      <Route path='/servicemanagement/pre-registration/hasslefree/spa/:id' element={<EditSPA page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-registration/hasslefree/stampduty' element={<StampDuty page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-registration/hasslefree/stampduty/:id' element={<EditStamp page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>


      <Route path='/servicemanagement/pre-registration/titlediligence' element={<Title page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-registration/titlediligence/:id' element={<EditTitle page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-registration/sustained' element={<Sustained page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-registration/sustained/:id' element={<EditSustained page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-registration/predelivery/client' element={<PreDelivery page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-registration/predelivery/client/:id' element={<EditClientSide page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-registration/predelivery/engineer' element={<EngineerSide page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/pre-registration/predelivery/engineer/:id' element={<EditEngineerSide page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/post-registration/sustained-marketing' element={<SustainedMarketing page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/post-registration/sustained-marketing/:id' element={<EditSustainedMarketing page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/post-registration/tds' element={<TDS page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      
      <Route path='/servicemanagement/post-registration/tds/:id' element={<EditTDS page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/post-registration/khata-transfer' element={<KhataTransfer page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

     
      <Route path='/servicemanagement/post-registration/khata-transfer/:id' element={<EditKhataTransfer page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/post-registration/bescom-transfer' element={<BESCOMTransfer page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/post-registration/bescom-transfer/:id' element={<EditBESCOM page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>


      <Route path='/servicemanagement/post-registration/properttax-transfer' element={<PropertyTaxTransfer page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/servicemanagement/post-registration/properttax-transfer/:id' element={<EditPropertyTaxTransfer page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>

      <Route path='/notifications' element={<Notification page={page} setPage={setPage} subPage={subPage} setSubPage={setSubPage}/>}/>
    </Routes>
    </BrowserRouter>
  );
} 

export default App;
