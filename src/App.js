import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

function App() {
  return (
    <BrowserRouter>
      <header className="d-flex">
        <h2 style={{display:"inline-block", fontSize: 35, padding: 20, paddingLeft: 130, color:"#2F6C88"}}>
          Sumit Teleservices
        </h2>
        <div className="me-auto" style={{ textAlign:"right", fontSize: 20, paddingTop:30, paddingLeft:530 }}>
          <Link to="#home" className="p-3" smooth style={{ color: "#2E4C80" }}>
            Home
          </Link>
          <Link to="#about" className="p-3" smooth style={{ color: "#2E4C80" }}>
            About
          </Link>
          <Link to="#contact" className="p-3" smooth style={{ color: "#2E4C80" }}>
            Contact Us
          </Link>
        </div>
      </header>
      <Home />
      <About />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
