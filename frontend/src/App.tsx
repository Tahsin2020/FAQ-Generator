import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Note, add 2 checks in Username and Page, if the Username or Page is invalid, give the NotFound page.
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/user/:username/" element={<Home />} />
        <Route path="/user/:username/:page" element={<Questions />} />
        <Route path="*" element={<>Not Found</>} />
      </Routes>
    </>
  );
}

export default App;
