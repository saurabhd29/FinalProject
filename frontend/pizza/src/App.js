import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Main from "./HomePage/Main";
import UserProfile from "./Profile/UserProfile";
import MyOrders from "./MyOrders/MyOrders";
import CheckOut from "./CheckOut/CheckOut";
import MyCart from "./MyCart/MyCart";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Contact from "./Contact/Contact";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Main/>} />
      <Route path="/UserProfile" element={<UserProfile/>} />
      <Route path="/MyOrders" element={<MyOrders/>} />
      <Route path="/MyCart" element={<MyCart/>} />
      <Route path="/CheckOut" element={<CheckOut/>} />
      <Route path="/Contact" element={<Contact/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
