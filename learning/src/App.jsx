
/*function App() {
// ya call function ha   
 function he(){
  alert("kasa")
 }
 // ya arrow function ha
 const fruit=()=>{
  alert("mango")
}
return(
 <button onClick={fruit}> click karo </button>
    
  )
}
function App() {
  function ap(){
    alert("why")
  }
  const fruit=(name)=>{
  alert(name)
  }
  return(
    <>
    <button onClick={ap}>  click </button>
     <button onClick={() =>fruit("apple")} > apple </button>
     <button onClick={() =>fruit("mango")} >mango </button>
    </>
  )
 // if else condition in conditiona rendering
function App(){
  let islogIn=false;
  if(islogIn){
    return <h2>  login </h2>
  } 
  else{
    return <h2> not login </h2>
  }
}

export default App;
// ternary operator ha conditiona rendering ka 
function App(){
  let age=15;
  return(
    <div>
      {age>=16 ? <h2>  adult </h2>:<h2> minor </h2> }
    </div>
  )
}
export default App; 
function App() {
  let isAdmin = true;

  return (
    <div>
      {isAdmin && <h1>Admin Panel</h1>}
    </div>
  );
}

export default App;*/
import { useState } from "react";
function App(){
  const[count,setCount]=useState(0);
  

  
}