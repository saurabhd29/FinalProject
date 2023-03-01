import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Main from "./HomePage/Main";
import UserProfile from "./Profile/UserProfile";
import MyOrders from "./MyOrders/MyOrders";
import CheckOut from "./CheckOut/CheckOut";
import MyCart from "./MyCart/MyCart";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Main/>} />
      <Route path="/UserProfile" element={<UserProfile/>} />
      <Route path="/MyOrders" element={<MyOrders/>} />
      <Route path="/MyCart" element={<MyCart/>} />
      <Route path="/CheckOut" element={<CheckOut/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
