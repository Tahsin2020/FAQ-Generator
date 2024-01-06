import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    console.log(username, email, password);
    try {
      toast.loading("Signing Up", { id: "signup" });
      await auth?.signup(username, email, password);
      toast.success("Signed Up Successfully", { id: "signup" });
    } catch (error) {
      console.log(error);
      toast.error("Signing Up Failed", { id: "signup" });
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
        <h2>Registration</h2>
        <form action="#" onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Enter your name"
              required
            />
          </div>
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
              placeholder="Create password"
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="confirm-password"
              placeholder="Confirm password"
              required
            />
          </div>
          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms & conditions</h3>
          </div>
          <div className="input-box button">
            <button type="submit">Register Now</button>
          </div>
          <div className="text">
            <h3>
              Already have an account? <a href="#">Login now</a>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
