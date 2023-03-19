import "./App.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import tick from "./assets/Images/tick.png"
import Layout from "./Routes/Layout";

import AllRoutes from "./Routes/Routes";


function App() {
  let dispatch = useDispatch();
  let navigate = useNavigate()

  let [modalVisible, setModalVisible] = useState(false)
  console.log(modalVisible)

  let closePopup = () => {
    setModalVisible(false);
    navigate("/");
  }


  return (
    <>

      <div className={`${modalVisible && "mainAppContainer"}`}>

        <Layout>
          <AllRoutes dispatch={dispatch} setModalVisible={setModalVisible}/>
        </Layout>
        
      </div>

      <div className={`popup ${modalVisible && "openPopup"}`}>
        <img src={tick} alt="tick" />
        <h2>Congratulation</h2>
        <p>Your Resume Has Been Successfully Saved</p>
        <button type="button" onClick={closePopup}>ok</button>
      </div>
    </>
  );
}

export default App;
