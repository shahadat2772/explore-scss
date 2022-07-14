import "./App.scss";
import { Routes } from "react-router-dom";
import Navbar from "./pages/Shared/Navbar/Navbar";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
