import Home from "./pages/Home/Home";
import Assets from "./pages/Assets/Assets";
import People from "./pages/People/People";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/people" element={<People />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
