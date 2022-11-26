// import { Logo } from "./Assets";

import { Navbar } from "./components";
import Router from "./routes";

function App() {
  return (
    <div className="bg-black">
      <Navbar />

      <Router />
    </div>
  );
}

export default App;
