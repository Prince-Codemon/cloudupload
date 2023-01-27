import React from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import IMG from "../../image.svg";

import { useState } from "react";
const First = ({setFile}) => {
  const [drag, setDrag] = useState(false);
  const valid = ["png", "jpeg", "Jpeg","jpg"]
  const fetch = (e) => {
    e.preventDefault()
    e.stopPropagation()
    // fetchF(e.target.files[0])
    const name = e.target.files[0].name
    const type = name.split('.')
     valid.includes(type[1])
       ? setFile(e.target.files[0])
       : alert("Give A Valid Image!");
   
  };
  
  function dropOver(e) {
    e.preventDefault();
    e.stopPropagation();
    setDrag(true);
  }

  const drop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const name = e.dataTransfer.files[0].name;
    const type = name.split(".");
    valid.includes(type[1])
      ? setFile(e.dataTransfer.files[0])
      : alert("Give A Valid Image!");
    
  };
  

 
  return (
    <>
     <Card>
          <h1 className="heading">Upload your image</h1>
          <p className="subHeading">File should be Jpeg,Png...</p>
          <div
            className={"imageContainer"}
            id="dropzone"
            onDragOver={(e) => {setDrag(true)
              e.preventDefault()
              e.stopPropagation()}}
            onDragOverCapture={dropOver}
            onDragLeave={(e) => {
              setDrag(false);
              e.preventDefault()
              e.stopPropagation()
            }}
            onDrop={drop}
          >
          <input type="file" name="" id="input" hidden onChange={fetch} accept="image/"/>
            <img src={IMG} alt="img" draggable="false"  />
            <p className="dragDrop">
              {drag ? "Release your image" : "Drag & Drop your image here"}
            </p>
          </div>
          <p className="span">Or</p>

          <Button> <label htmlFor="input">Choose a file</label></Button>
        </Card>
    </>
  );
};

export default First;
