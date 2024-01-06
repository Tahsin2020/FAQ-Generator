import { useAuth } from "../context/AuthContext";

const Sidebar = () => {
  const auth = useAuth();
  return (
    <div
      style={{
        height: "30vh",
        width: "20vw",
        position: "fixed",
        marginLeft: "5vw",
        marginTop: "10vh",
        backgroundColor: "white",
        borderRadius: "6px",
        padding: "34px",
        fontSize: "18px",
      }}
    >
      {auth?.isLoggedIn ? (
        <div>
          <div>
            User Page
            <hr />
          </div>
          <div>
            Settings
            <hr />
          </div>
          <div>
            Home
            <hr />
          </div>
          <div
            onClick={() => {
              auth?.logout();
            }}
          >
            Sign Out
            <hr />
          </div>
        </div>
      ) : (
        <div>
          Login
          <hr />
          Sign Up
          <hr />
          Home
        </div>
      )}
    </div>
  );
};

export default Sidebar;
