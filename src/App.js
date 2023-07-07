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

    const removeBodyClasses = ()=>{
      document.body.classList.remove('bg-light');
      document.body.classList.remove('bg-dark');
      document.body.classList.remove('bg-warning');
      document.body.classList.remove('bg-success');
      document.body.classList.remove('bg-danger');
      document.body.classList.remove('bg-primary');
      document.body.classList.remove('bg-secondary');
    }

  const toggleThemeMode = (typeIs)=>{
    removeBodyClasses();
    if(typeIs == null){
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
    else{
      document.body.classList.add('bg-'+typeIs);
      console.log(typeIs);
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
