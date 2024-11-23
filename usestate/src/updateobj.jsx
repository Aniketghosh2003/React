import { useState } from "react";
function Updateobj() {
    const [car,setCar] = useState({year: 2024, make:"Ford", model:"Mustang"});

    function handleyearchange(e){
        setCar(c => ({...c,year:e.target.value}));
    }
    function handlemakechange(e){
           setCar((c) => ({ ...c, make: e.target.value }));
    }
    function handlemodelchange(){
        setCar((c) => ({ ...c,model: e.target.value }));
    }

    return (
      <div>
        <p>
          Your favorite car is : {car.year} {car.make} {car.model}
        </p>

        <input type="number" value={car.year} onChange={handleyearchange} />
        <br />
        <input type="text" value={car.make} onChange={handlemakechange} />
        <br />
        <input type="text" value={car.model} onChange={handlemodelchange} />
      </div>
    );
}

export default Updateobj;
