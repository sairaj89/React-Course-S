import React,  {useState}  from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase","success")
    }

    const handlelowClick = () => {
        //console.log("Uppercase was clicked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase","success")
    }

    const handleclear = () => {
        //console.log("Uppercase was clicked")
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!","success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    const handleButtonClick = () => {
        setIsBold(!isBold);
        props.showAlert("Text converted to bold","success")
    };

    const [text, setText] = useState("");
    // text="new text"   // wrong way to change the state
    // setText("New text");  // correct way to change the state

    const [isBold, setIsBold] = useState(false);


    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#201855'}}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ fontWeight: isBold ? 'bold' : 'normal', backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}} />
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={handlelowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleclear}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-secondary mx-1 my-1" onClick={handleButtonClick}>Make Text Bold</button>
            </div>
            <div className="container my-2" style={{color:props.mode==='dark'?'white':'#201855'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p style={{ fontWeight: isBold ? 'bold' : 'normal'}}>{text.length>0?text:""}</p>
            </div>
        </>

    )
}
