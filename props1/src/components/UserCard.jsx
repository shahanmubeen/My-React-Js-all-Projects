function Hello({ name = "ali", age = 35, city = "unknown", hobbies = [] }) {
  return (
    <>
      <h1>Hy: {name}</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>

      <ul>
        // yha par mana map loop chalaya ha jitna baar bhii user na hobbies chlaya ho chaha 1 baar ya 1000 baar utni baar loop chla ga har baar hobby ma jai ga or index ma bhii is lacture ma array kasa send ho ga or map loop ka use kasa ho ga is ma ya bataya gya ha // 
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </>
  );
}

export default Hello;