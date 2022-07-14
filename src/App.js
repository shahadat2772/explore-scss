import "./App.scss";
import { Routes } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar";
import Banner from "./pages/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
  );
}

export default App;
