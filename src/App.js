
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import Txt from './component/Txt';


import React,{useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";







function App() {
  const [mode,setmode]=useState('light');

  const [alert,setalert]=useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 3000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor ="grey";
      showalert(": Dark Mode has been Enable","success");
      document.title="TextUtil-Dark Mode";
    }else{
      setmode('light');
      document.body.style.backgroundColor ="white";
      showalert(": Light Mode has been Enable","success");
      document.title="TextUtil-Light Mode";
    }
  }


  return (
    
      // <div className='blank'>
        // <Navbar title="Text Utiles" mode={mode} toggleMode={toggleMode}/>
        // <Alert alert={alert} />
      //   <div className="container my-3"  mode={mode}>
        
      //   <Routes>
      //       <Route path="/about" element={<About />}></Route>
      //       <Route path="/" element={<Txt heading="Entre your text to Analyze....." mode={mode} showalert={showalert}/>}></Route>
      // </Routes>
      //   </div>
      // </div>
    
      <Router>
      

        <Navbar title="Text Utiles" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert} />
      <div className="container my-3">
               
          <Routes>
            <Route exact path="/about" element={<About/>} >

            </Route>

            <Route exact path="/" element={<Txt heading="Entre your text to Analyze....." mode={mode} showalert={showalert}/>}>

            </Route>
          </Routes>


      </div>


      </Router>
   
  )
}

export default App;
