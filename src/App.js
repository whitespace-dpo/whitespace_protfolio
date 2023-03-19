import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./routes/Work/Work";
import About from "./routes/About/About";
import CV from "./routes/CV/CV";
import BloodDonor from "./routes/Work/Projects/BloodDonor/BloodDonor";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact strict path="/" element={<Work />} />
          <Route exact strict path="/about" element={<About />} />
          <Route exact strict path="/cv" element={<CV />} />
          <Route exact strict path="/blood_donor" element={<BloodDonor />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
