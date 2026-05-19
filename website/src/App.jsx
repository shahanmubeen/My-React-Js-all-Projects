import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Web Development",
      desc: "Modern and responsive websites using React JS.",
    },
    {
      id: 2,
      title: "UI/UX Design",
      desc: "Professional and clean user interface designs.",
    },
    {
      id: 3,
      title: "SEO Optimization",
      desc: "Improve website ranking and performance.",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* NAVBAR */}
      <nav
        style={{
          backgroundColor: "#111827",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Anotonx</h2>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            padding: "10px 15px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {/* CONDITIONAL MENU */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#1f2937",
            color: "white",
            padding: "20px 40px",
          }}
        >
          <p>Home</p>
          <p>Services</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      )}

      {/* HERO SECTION */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
          backgroundColor: "#f3f4f6",
        }}
      >
        <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>
          Build Modern Websites
        </h1>

        <p style={{ fontSize: "20px", color: "#4b5563" }}>
          We create fast, responsive and professional web applications.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 30px",
            border: "none",
            backgroundColor: "#2563eb",
            color: "white",
            fontSize: "18px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 40px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "35px",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{service.title}</h3>
              <p style={{ color: "#6b7280" }}>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        style={{
          backgroundColor: "#111827",
          color: "white",
          padding: "60px 20px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Contact Us
        </h2>

        <form
          style={{
            maxWidth: "500px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Enter Name"
            style={{
              padding: "15px",
              borderRadius: "5px",
              border: "none",
            }}
          />

          <input
            type="email"
            placeholder="Enter Email"
            style={{
              padding: "15px",
              borderRadius: "5px",
              border: "none",
            }}
          />

          <textarea
            placeholder="Enter Message"
            rows="5"
            style={{
              padding: "15px",
              borderRadius: "5px",
              border: "none",
            }}
          ></textarea>

          <button
            style={{
              padding: "15px",
              border: "none",
              backgroundColor: "#2563eb",
              color: "white",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Send Message
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#030712",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <p>© 2026 Antonx. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;