import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // input handle
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>User Registration Form</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <div>
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* EMAIL */}
        <div>
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* PASSWORD */}
        <div>
          <label>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <br />

        {/* ROLE */}
        <div>
          <label>Select Role:</label>
          <br />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="">Choose Role</option>
            <option value="student">Student</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
          </select>
        </div>

        <br />

        <button type="submit">Register</button>
      </form>

      <hr />

      {/* CONDITIONAL RENDERING */}

      {submitted ? (
        <div>
          <h2>Registration Successful ✅</h2>

          <h3>Name: {formData.name}</h3>
          <h3>Email: {formData.email}</h3>

          {/* Conditional Components */}
          {formData.role === "student" && (
            <p>You selected Student Role 🎓</p>
          )}

          {formData.role === "developer" && (
            <p>You selected Developer Role 💻</p>
          )}

          {formData.role === "designer" && (
            <p>You selected Designer Role </p>
          )}
        </div>
      ) : (
        <p>Please Fill The Form</p>
      )}
    </div>
  );
}

export default App;