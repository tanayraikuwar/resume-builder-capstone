import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about_us' element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
