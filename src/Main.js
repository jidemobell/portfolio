import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Journal from "./components/Journal/Journal";
// import Home from "./components/Home/Home";

function Main() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              {/* <Route path="/home" element={<Home />} /> */}
              <Route path="/blog" element={<Journal />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;