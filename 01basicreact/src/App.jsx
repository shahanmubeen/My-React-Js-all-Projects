import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, password, email });
  };

  const handleClear = () => {
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <>
      <h2>Form in React Js</h2>

      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>

      <h3>Name: {name}</h3>
      <h3>Password: {password}</h3>
      <h3>Email: {email}</h3>
    </>
  );
}

export default App;