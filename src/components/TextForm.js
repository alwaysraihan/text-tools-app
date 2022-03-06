import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick=()=>{
      let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const handleLowClick=()=>{
        let newText=text.toLocaleLowerCase();
        setText(newText)
    }
  return (

     <>
          <div className='container'>
<h4 className='text-warning '>{props.heading} </h4>
<div className="mb-5">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}  >Convert to Uppercase</button>
  <button className="btn btn-primary text-white ms-5" onClick={handleLowClick}  >Convert to Lowercase </button>
     </div>
     <div className="container my-4">
         <h4 className='text-info'>Your Text summary</h4>
         <p>{text.split(" ").length-1} words and chracters {text.length}</p>
         <h4 className='text-info'>Preview</h4>
         <p>{text}</p>
         </div>
     </>
    
  )
}
