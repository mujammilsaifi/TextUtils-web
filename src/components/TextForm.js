// import { useState } from "react";
import React, {useState} from 'react'

export default function TextForm(props){

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleChange=(event)=>{
        settext(event.target.value) //change state 
    }

    const handleUpCase=()=>{
        let newtext=text.toUpperCase();
        settext(newtext)//here text is set in hoocks
        props.showAlert("Converted to uppercase!", "success");
    }
    const handleLoweCase=()=>{
        let newtext=text.toLowerCase();
        settext(newtext)//here text is set in hoocks
        props.showAlert("Converted to Lowercase!", "success");
    }
    const ClearText=()=>{
        let newtext='';
        settext(newtext)//here text is set in hoocks
        props.showAlert("Text has been Cleared!", "success");//this is alert 
    }

    const [text, settext] = useState('')  //hoocks here 

    return (
            <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                <textarea name="" style={{backgroundColor: props.mode==='dark'? 'rgb(23 14 48)': 'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleChange} className="form-control" id="myBox"  rows="8"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mx-2" onClick={handleUpCase}>Convert to UpperCase</button>
                <button type="submit" className="btn btn-primary mx-3" onClick={handleLoweCase}>Convert to LowerCase</button>   
                <button type="submit" className="btn btn-primary mx-2" onClick={ClearText}>Clear Text</button>
                <button type="submit" className="btn btn-primary" onClick={handleCopy}>Copy Text</button>  
            </div>
            <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
                <h2 >Your Text Summary </h2>
                <p>{(text.split(" ").length)-1} Words and {text.length} Character</p>
                <p>{0.008 * ((text.split(" ").length)-1)}  Minuts read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter Some Text for Preview'}</p>
            </div>
            </>
        );
    
}
