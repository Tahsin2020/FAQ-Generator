import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* Notes: Add 2 checks in Username and Page, if the Username or Page is invalid, give the NotFound page.
          Access the Username from the url, for both the page and the literal page.
          Check if the Page - Questions has been broken due to the username modification.
          Alter the List of Pages to include the Username. Perhaps in the backend, create a new object called Pages.
*/

/* Questions: Should I add in Tailwind CSS to make it easier to copy in my sign in and sign up pages? I don't really use it. */
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
