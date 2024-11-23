import { useState } from "react";
function Components() {
    const [name,setName] = useState("Guest");
    const [payment,setPayment] = useState();

    function handleName(e){
        setName(e.target.value);
    }

    function handlepayment(e){
      setPayment(e.target.value);
    }

    return (
      <>
        <input value={name} onChange={handleName} />
        <p>Name: {name}</p>

        <select value = {payment} onChange={handlepayment}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MarterCard</option>
          <option value="CreditCard">CreditCard</option>
        </select>
        <p>Payment : {payment}</p>
      </>
    );
}

export default Components;


// useState
// const [name, setName] = useState("Guest");

// const updatename = () => {
//   setName("Aniket");
// };

// return (
//   <>
//     <p>Name: {name}</p>
//     <button onClick={updatename}>Set Name</button>
//   </>
// );