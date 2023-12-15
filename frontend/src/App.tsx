import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:page" element={<Questions />} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </>
  );
}

export default App;
