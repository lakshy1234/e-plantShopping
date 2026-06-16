import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery</p>
      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default App;
