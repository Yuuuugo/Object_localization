import React, { useState,useRef } from "react"
import './image_field.css'
import texture from '../../assets/bg-texture.png'



const Image_field = () => { 
  const [img, setImg] = useState();

  const onImageChange = (e) => {
    const [file] = e.target.files;
    setImg(URL.createObjectURL(file));
  };
    return(

        <div id = "image">
            <h1> 
            Image field 
            </h1>

        <div id = "image_form">
        <img src = {texture} alt="texture" />
        <form>
        

      <img src={img} alt="" />
      <input type="file" onChange={onImageChange} />
      
      </form>
      </div>

      </div>



    )
}   

export default Image_field