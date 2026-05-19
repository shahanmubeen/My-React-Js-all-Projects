/*import Hello from './components/UserCard'
 function Ab(){
  return (
    <>
    <Hello Name="Sam"  age={26} />
    </>
  )
}
export default Ab;*/
import Hello from './components/UserCard'
function Ab(){
  const hobbies=["reading","writing","coding"]
return(
  <>
  <Hello name="sam" age={18} city="peshwar" hobbies={hobbies} />
   <Hello name="jack" age={20} city="rawalpindi"  />
   <Hello name="akhay" />
   // kasa ham array ki value ko bhii props ma send kar skta ha is ka tarka

  
</>
)
}
export default Ab