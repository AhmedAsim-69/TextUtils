import { useState } from "react";
import "./App.css";

import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [themeMode, setThemeMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const toggleThemeMode = ()=>{
    if(themeMode === 'light'){
      setThemeMode("dark");
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been Enabled", "success");
    }
    else{
      setThemeMode('light');
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled", "success");
    }
}

  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" themeMode={themeMode} toggleThemeMode={toggleThemeMode} btnText={btnText}/>
        <Alert alert={alert}/>
        <div className="container"> 
          <Routes>

            <Route exact path="/about" element={<About themeMode={themeMode}/>}>
              </Route>
            <Route exact path="/" element={<TextForm title="Modify Your Text" label="Enter text" themeMode={themeMode} showAlert={showAlert}/>}>
              </Route>
            
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
