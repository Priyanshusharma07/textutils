import React, {useState} from 'react'


export default function Txt(props) {
    const handleUPClick=()=>{
        console.log("Uppercase was Clicked" + text);
        let newtext=text.toUpperCase();
        settext(newtext);
        props.showalert("Convert to UpperCase","success");
    }

    const handleOnChange=(event)=>{
        console.log("On changed");
        settext(event.target.value)
        props.showalert("Convert to UpperCase","success");
    }
    
    const handleLWcase=()=>{
        console.log("To Lower Case" + text);
        let newtext=text.toLowerCase();
        settext(newtext);
        props.showalert("Convert to LowerCase","success");
    }

    const handleclear=()=>{
        console.log("Clear All");
        let newtext="";
        settext(newtext);
        props.showalert("Clear all Text","success");
    }
    const handleCopy=()=>{
        console.log("Copy text");
        var text=document.getElementById("box");
        text.select();
        navigator.clipboard.writeText(text.value);
        let newtext="";
        settext(newtext);
        props.showalert("Text has been Copy","success");
    }

  


    const [text,settext]=useState('Entre your text here??');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' ,color: props.mode==='dark'?'whit':'black'}} id="box" rows="8"></textarea>    
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUPClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLWcase}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleclear}>Clear All</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleremoveSpaces}>To remove a Extra Space</button> */}

    </div>
    <div className='container my-2' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} Words And {text.length} Character</p>
        <p>{0.008*text.length } Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Entre somting to preview"}</p>
    </div>

    </>
  )
}
