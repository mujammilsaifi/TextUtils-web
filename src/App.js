import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import  {useState} from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const[Mode, setMode] = useState('light');

  const toggleMode = () => {
    if (Mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = 'rgb(23 14 48)';
        showAlert("Dark mode has been enable", "success")
        document.title='TextUtils-darkmode'
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("light mode has been enable", "success")
        document.title='TextUtils-lightmode'
    }    
  };
  const [Alerttext,setAlerttext] = useState(null)
  const showAlert = (message, type) => {
    setAlerttext({
        msg: message,
        Type: type
    })
    setTimeout(()=>{
      setAlerttext(null)
    },1500)
}
  return (
    <>
     <Router>
      <Navbar title='TextUtils' about='About Text'  mode={Mode}  toggleMode={toggleMode}> </Navbar>
      <Alert alert= {Alerttext} />

      <div className="container my-3" >

        <Routes>
          <Route exact path="/about" element={<About className="container my-3" />}></Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Write Text to Analyze below ' mode={Mode}></TextForm>}>
          </Route>
        </Routes>
            
      </div>
      
      </Router>
      {/* <About className="container my-3"></About> */}
      
    </>
  ); 
}

export default App;

