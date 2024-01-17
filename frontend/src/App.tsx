import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import Userpage from "./pages/Userpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Market from "./pages/Market";
import Notfound from "./pages/Notfound";

/* Notes: Add 2 checks in Username and Page, if the Username or Page is invalid, give the NotFound page.
          Access the Username from the url, for both the page and the literal page.
          Check if the Page - Questions has been broken due to the username modification.
          Alter the List of Pages to include the Username. Perhaps in the backend, create a new object called Pages.
*/

/* Questions: Should I add in Tailwind CSS to make it easier to copy in my sign in and sign up pages? I don't really use it. */
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<Market />} />
        <Route path="/user/:username/" element={<Userpage />} />
        <Route path="/user/:username/:title" element={<Questions />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
