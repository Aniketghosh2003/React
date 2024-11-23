import { useState } from "react";
function ColorGenerator() {
    const [color,setColor] = useState("#FFFFFF");

    function handlecolor(e){
          setColor(e.target.value);
    }

    return(
        <div className="color-generator">
          <h2>Color Generator</h2>
          <div className="color-display" style={{backgroundColor : color}}>
               <p>Select the color : {color}</p>
          </div>
          
          <label> Select the Color:</label>
          <input type="color" value={color} onChange={handlecolor} />
        </div>
    )
}
export default ColorGenerator;
