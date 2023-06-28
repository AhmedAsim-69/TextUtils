import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [themeMode, setThemeMode] = useState("light")
  
  const [btnText, setBtnText] = useState("Enable Dark Mode")

  const toggleThemeMode = ()=>{
    if(themeMode === 'light'){
      setThemeMode("dark")
      setBtnText("Enable Light Mode")
      document.body.style.backgroundColor = "#212529";
    }
    else{
      setThemeMode('light')
      setBtnText("Enable Dark Mode")
      document.body.style.backgroundColor = "white";
    }
}
  
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" themeMode={themeMode} toggleThemeMode={toggleThemeMode} btnText={btnText}/>
      <div className="container"> 
        <TextForm title="Uppercase Your Text" label="Enter text" themeMode={themeMode}/>
      </div>
    </>
  );
}

export default App;
