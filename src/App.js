import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Restaurants from "./Components/Restaurant";
import Restaurant_pop from "./Components/Restaurant_pop";
import { useState } from "react";

function App() {
  const [popState, setPopState] = useState(false);
  const [restaurant, setRestaurant] = useState("");
  return (
    <div className="App">
      <Home />
      {popState && (
        <Restaurant_pop
          state={popState}
          setState={setPopState}
          activeRt={restaurant}
        />
      )}

      <Restaurants
        state={popState}
        setState={setPopState}
        setRt={setRestaurant}
      />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
