import React, {useState} from 'react'

import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const upperCaseBtnClk = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const lowerCaseBtnClk = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const textChanged = (event)=>{
        setText(event.target.value)
    }

  return (
    <>
    <div>
        <div className="mb-3">
            <h1>{props.title}</h1>
            <label for="exampleFormControlTextarea1" clasNames="form-label">{props.label}</label>
            <textarea className="form-control" value={text} onChange={textChanged} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={upperCaseBtnClk}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={lowerCaseBtnClk}>Convert to LowerCase</button>
    </div>
    <div className="container my-3">
        <h1>Text Summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>Read Time: {(0.008 * text.length).toPrecision(3)} Minutes</p>
    </div>
    <div>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}

TextForm.propTypes = { title: PropTypes.string, label: PropTypes.string };
TextForm.defaultProps = { title: "Your Title Here", label: "Your Label Here" };
