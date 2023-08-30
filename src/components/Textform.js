import React, { useState } from "react";


export default function TextForm(props) {
  const handleUpclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handleloclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showAlert("Converted to Lowercase!", "success");
  };

  const handleclear = () => {
    let newtext = " ";
    settext(newtext);
    props.showAlert("text cleared!", "success");
  };
  const handlespace = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handlecopy = () => {
    
    navigator.clipboard.writeText(text);
    
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleOnchange = (event) => {
    settext(event.target.value);
  };

  const [text, settext] = useState(" ");

  return (
    <>
      <div className="container">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button  disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleclear}>
          Clear Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlespace}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h3>Your text summary</h3>

        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes for read</p>

        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
      </div>
    </>
  );
}
