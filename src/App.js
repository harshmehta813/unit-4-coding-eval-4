import "./styles.css";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}
