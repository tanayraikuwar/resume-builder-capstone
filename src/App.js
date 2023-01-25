import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import {changeName,changeLname,} from "./Redux/Action/personalInfo"
import Template from './Template/Template1/template1'; 

function App() {
  let newState = useSelector(store => store);
  let dispatch = useDispatch()
  return (
    <>
      <pre>{JSON.stringify(newState.changeTemplateData)}</pre>
      <h1>I am app component</h1>
      <input type="text" onChange={(e)=>{
        dispatch(changeName(e.target.value))
      }} />
      <Template/>
    </>
  );
}

export default App;
