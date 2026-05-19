function Header() {
  return (
    <header style={styles.header}>
      
      <div style={styles.logo}>
        React Js
      </div>

      <nav style={styles.nav}>
        <a href="#" style={styles.link}>Tutorials</a>
        <a href="#" style={styles.link}>Exercises</a>
        <a href="#" style={styles.link}>Certificates</a>
        <a href="#" style={styles.link}>Services</a>
      </nav>

      <button style={styles.btn}>
        Sign In
      </button>

    </header>
  )
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#282A35",
    color: "white",
  },

  logo: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#04AA6D",
  },

  nav: {
    display: "flex",
    gap: "20px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
  },

  btn: {
    backgroundColor: "#06BB8A",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    color: "white",
    cursor: "pointer",
  },
}

export default Header