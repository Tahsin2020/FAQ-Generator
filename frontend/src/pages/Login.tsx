import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Logging in", { id: "login" });
      await auth?.login(email, password);
      toast.success("Logged in Successfully", { id: "login" });
    } catch (error) {
      console.log(error);
      toast.error("Log in Failed", { id: "login" });
    }
  };
  useEffect(() => {
    if (auth?.user) {
      return navigate("/login");
    }
  }, [auth]);
  return (
    <div className="body">
      <div className="wrapper">
        <h2>Log In</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="input-box button">
            <button type="submit">Log in</button>
          </div>
          <div className="text">
            <h3>
              Don't have an account? <a href="#">Sign Up</a>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
