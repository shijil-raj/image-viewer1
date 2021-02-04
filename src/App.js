import React,{useState} from "react";


import "./style.css";


const App= () => {
  const [imgPreview, setImgPreview] = useState(null);
  const[error,setError] = useState(false);
  const handleImageChange = (e) => { 
    const selected =e.target.files[0];
    const ALLOWED_TYPE =["image/png","image/jpeg","image/jpg","application/pdf","text/csv","application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/doc",
 
    "application/docx"];
    if(selected && ALLOWED_TYPE.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(selected);
    }else{
      setError(true);
     
    }
  };
  return (
    <div className="App">
    <div className="container">
   
    {error && <p className="errorMsg"> File not supported</p>}
    <div 
    className="imgPreview" style = {{background:imgPreview ? `url("${imgPreview}")no-repeat center/cover`
    :"#131313"
  }} 
  >
      {!imgPreview && (
        <>
        <p>Add a file</p>
        <label htmlFor="fileUpload" className="customFileUpload">choose file
        </label>
        <input type="file" id="fileUpload" onChange={handleImageChange} />
        <span>(jpg , png or pdf , doc , docx...)</span>
      </>
      )}
    </div>
    {imgPreview && (
      <button onClick={() =>setImgPreview(null)}>Remove files</button>
    )}
    </div>
    </div>
  );
}

export default App;
