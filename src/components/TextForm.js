import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
    <>
        <div>
            <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}}>
            </textarea>
            <button className="btn btn-primary mt-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mt-3 mx-3" onClick={handleDownClick}> Convert to Lowercase </button>
            <button className="btn btn-primary mt-3" onClick={handleCopy}> Copy Text </button>
            </div>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
