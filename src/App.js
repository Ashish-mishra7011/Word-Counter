import './App.css';
import React, { useState } from 'react'

import Navbar from './components/Navbar';
import Forms from './components/Forms';
import Alert from './components/Alert'
import Texts from './components/Texts';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
  
  
function App() {
    const [mode, setMode] = useState("light")  //setup mode light or dark
    const [alert, setAlert] = useState(null); //show the text in alert

    const showAlert= (message,type)=>{
        setAlert({
            msg:message,
            type:type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);

    }

    const toggleMode =()=>{
        if(mode==="light"){
            setMode('dark');
            document.body.style.backgroundColor='#254F78';
            showAlert("Dark mode has been enabled","success");
        }
        else{
            setMode("light");
            document.body.style.backgroundColor='white';
            showAlert("Light mode has been enabled","success");
        }
    }
    return (
        
        <>
        <Router>
<Navbar  title='📝 Word Magics ' mode={mode} toggleMode={toggleMode} />
       <Alert  alert={alert} />
<div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<Texts mode={mode}/>} />
          <Route exact path="/home"  element={<Forms  showAlert={showAlert} heading="Write your message in the box" mode={mode} />
      } />
      </Routes>
</div>
</Router>
        </>
 


    );
}

export default App;
