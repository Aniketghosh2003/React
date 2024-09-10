function Botton() {
  //const handleclick = (name) => console.log(`${name} stop clicking me`);
  const handleclick = (e) => e.target.textContemt = "OUCH!!!";
  return <button onClick={(e) => handleclick(e)}>Click Me</button>;
}

export default Botton;
