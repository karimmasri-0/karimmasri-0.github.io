import { BrowserRouter } from "react-router-dom";
import {
  Experience,
  About,
  Works,
  Tech,
  Navbar,
  Hero,
  Stars,
  Contact,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-center bg-no-repeat bg-cover bg-image">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Stars />
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
