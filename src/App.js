import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';   
import Textform from './Components/Textform';
import { useState } from 'react';
import About from './Components/About'; 
import { BrowserRouter as Router, Routes, Route, Link ,Switch} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(2 36 63)';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div >
      <Router>
      <Navbar title = "Textutils" mode= {mode} toggleMode={toggleMode}/>
      <div className="container my-5">
      
      <Routes>
        <Route exact path="/" element={<Textform heading = "Enter the text to analyze below" mode={mode}/>} />
        <Route exact path="/about" element={<About />} />
        {/* <Route path="*" element={"page not found"}/> */}
      </Routes>
      
      </div>
    </Router>
    </div>
  );
}

export default App;