import './App.css';
import Login from "./pages/Login"
import Home from "./pages/Home"
import Signup from './pages/Signup'
import { Routes, Route, BrowserRouter } from "react-router-dom";




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
