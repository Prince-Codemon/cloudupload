import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import End from "./component/Pages/End";
import First from "./component/Pages/First";
import Loading from "./component/Pages/Loading";

const App = () => {
  const [file, setFile] = useState();
  const [url, setUrl] = useState();

  const sendImage = async (image) => {
   
    const formData = new FormData();
    formData.append("file", image);
    const data1 = await fetch(`${process.env.REACT_APP_SERVER_URL}/upload`, {
      method: "POST",
      headers: {
        'Secret-Key': process.env.REACT_APP_SECRET_KEY,
      },
      body: formData,
    });

    const res = await data1.json();
    if (data1.status === 201) {
      setUrl(`${process.env.REACT_APP_SERVER_URL}/images/${res.url}`);
    } else {
      window.alert("Something Went Wrong");
    }
  };

 
  useEffect(() => {
    file && sendImage(file);
  }, [file]);

  return (
    <>
      {!file ? <First setFile={setFile} /> : file && !url ? <Loading /> : ""}
      {url && <End url={url} src={url} />}
    </>
  );
};

export default App;
