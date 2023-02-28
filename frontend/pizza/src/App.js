import Header from "./components/Header";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import MenuBody from "./components/MenuBody";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
      <NavBar/>
      <MenuBody/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
