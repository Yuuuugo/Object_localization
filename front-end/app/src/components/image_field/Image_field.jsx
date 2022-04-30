import React, { useState } from "react"
import './image_field.css'
import texture from '../../assets/bg-texture.png'



const Image_field = () => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    return(

        <div id = "image">
            <h1> 
            Image field 
            </h1>

        <div id = "image_form">
        <img src = {texture} alt="texture" />
        <form>
        
        

        <input
          type="file"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
      </form>
      </div>

      </div>



    )
}   

export default Image_field