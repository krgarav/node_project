import "./App.css";

function App() {
  const add =(a:number,b:number)=>{
    return a+b;
  }
  
  const addHandler=()=>{
    const a=document.getElementById("firstnumber") as HTMLInputElement;
    const b = document.getElementById("secondnumber") as HTMLInputElement;
    const num1=a.value;
    const num2 = b.value;
    const result = add(+num1 , +num2);
    console.log(result);
  }
  return (
    <>
      <input type="number" id="firstnumber"/>
      <input type="number" id="secondnumber"/>
      <button onClick={addHandler}>Add</button>
    </>
  );
}

export default App;
