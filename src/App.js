import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Template1 from "./Template/Template1/template1";
import Template2 from "./Template/Template2/template2";
import Template3 from "./Template/Template3/template3";
import Template4 from "./Template/Template4/template4";
import Form from "./Components/multistepForm/Form";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about_us" element={<About />} />
        <Route exact path="/template1" element={<Template1 />} />
        <Route exact path="/template2" element={<Template2 />} />
        <Route exact path="/myresume/changePersonalDetails" element={<Form/>}/>
      </Routes>
    </>
  );
}

export default App;
