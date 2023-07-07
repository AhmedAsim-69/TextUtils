import React, {useState} from 'react'

import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const upperCaseBtnClk = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase Successfully", "success");
    }

    const lowerCaseBtnClk = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase Successfully", "success");
    }
    const clearText = ()=>{
        setText("")
    }
    const fixExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces successfully", "success");
    }
    const copyText = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        document.getSelection().removeAllRanges();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success");
    }
    const textChanged = (event)=>{
        setText(event.target.value)
    }

  return (
    <>
    <div className={`container text-${props.themeMode === "light" ? "dark" : "light"}`}
     style={{backgroundColor: props.themeMode === "dark" ? "dark" : "light"}}>
        <h1>{props.title}</h1>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.label}</label>
            <textarea className="form-control" style={{backgroundColor: props.themeMode === "dark" ? "black" : "white",
             color: props.themeMode === "light" ? "black" : "white"}} 
             value={text} onChange={textChanged} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={upperCaseBtnClk}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={lowerCaseBtnClk}>Convert to LowerCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={fixExtraSpaces}>Fix Extra Spaces</button>
    </div>
    <div className={`container my-3 text-${props.themeMode === "light" ? "dark" : "light"}`}>
        <h1>Text Summary</h1>
        <p>{text.split(" ").filter((event)=>{return event.length !== 0}).length} words, {text.length} characters</p>
        <p>Read Time: {(0.008 * text.split(" ").filter((event)=>{return event.length !== 0}).length).toPrecision(3)} Minutes</p>
        <h3>Preview</h3>
        <p>{(text.length === 0) ? "Please enter text to preview" : text}</p>
    </div>
    </>
  )
}

TextForm.propTypes = { title: PropTypes.string, label: PropTypes.string };
TextForm.defaultProps = { title: "Your Title Here", label: "Your Label Here" };
