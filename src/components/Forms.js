import React,{useState} from 'react'

export default function Forms(props) {
    const handle=()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to  uppercase!","success")
      }
      const handletolower=()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to  lowercase!","success")
    }
    const handletoclear=()=>{
        let newtext = "";
        setText(newtext);
        props.showAlert("Cleared all text!","success")
    }
    const handlecopy =() =>{
      window.navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success")
    }
  const handleonchange=(event)=>{
       console.log("onchange");
     setText(event.target.value);
   }

    const [text , setText]= useState("");

  return (
   <>
    <div  className='container'  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        
    <div className="mb-3">
      <textarea className="form-control"  value={text} onChange={handleonchange}  style={{backgroundColor:props.mode==='dark'?'#254F78':'white',color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"  ></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary" onClick={handle}>Convert to Upper Text</button>
    <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handletolower}>Convert to Lower Text </button>
    <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handletoclear}>Clear all Text</button>
    <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handlecopy}>Copy the Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>Your text summary</h1>
          <p>{text.split(/\s+/)
            .filter(function(n) { return n!=='' })
            .length} words<br/>{text.length} characters
          </p>
          <p>You can read this in {0.008*text.split(' ').filter(function(n) { return n!=='' })
           .length} minutes. </p>
        </div>
        </>

  ) 
}
