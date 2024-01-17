import React, { useEffect, useState } from 'react'

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");
  
  const randomColorUtility = (length) => {
        return Math.floor(Math.random()*length);
  }

  const handleCreateRandomHexColor = () => {
       const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
       let hexColor = "#";

       for(let i=0; i<6;i++){
        hexColor+=hex[randomColorUtility(hex.length)];
       }

       setColor(hexColor);
    
  }
  const handleCreateRandomRgbColor = () => {
       const r = randomColorUtility(256);
       const g = randomColorUtility(256);
       const b = randomColorUtility(256);

       setColor(`rgb(${r},${g},${b})`);

  }

  useEffect(() => {
    if(typeOfColor === 'rgb'){
      handleCreateRandomRgbColor();
    }
    else{
      handleCreateRandomHexColor();
    }
  },[typeOfColor]);

  return (
    <div style={{width: '100vw', height: '100vh', backgroundColor: color}}>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX colour</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB colour</button>
      <button onClick={typeOfColor === "hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate a random colour</button>
      <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', fontSize: '20px', marginTop: '200px', gap: '20px'}}>
        <h3>{typeOfColor === "rgb" ? "RGB colour": "HEX colour"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColor;