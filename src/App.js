import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./component/Checkout";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
