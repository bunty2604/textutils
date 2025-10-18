import React from 'react'
import { useState } from 'react';

export default function Textform(props) {

    const handleUppercase = () =>{
        setText(text.toUpperCase());
    }

    const handleChange = (event) =>{
        setText(event.target.value);
    }

    const handleLowercase = () =>{
        setText(text.toLowerCase());
    }

    const handleClear = () =>{
        setText('');
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
    }

    const handleRemove = () =>{
        setText(text.replace(/\s+/g, ' ').trim());
    }

    const[text,setText] = useState('');


  return (
    <>
    <div>
        <div className="my-5" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'rgb(59 59 59)', color: props.mode === 'light' ? 'black' : 'white'}} id="exampleFormControlTextarea1" rows="12"></textarea>
        </div>
   
    
        <button className="btn btn-primary mx-1" onClick = {handleUppercase}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick = {handleLowercase}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick = {handleClear}>Clear text</button>
        <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick = {handleRemove}>Remove extra spaces</button>
    
    </div>

    <div className="comtaimer my-5" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(' ').filter((element)=>element.length !== 0).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(' ').filter((element) => element.length !== 0).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>

</>
  )
}