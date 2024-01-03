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
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Signing Up", { id: "signup" });
      await auth?.signup(name, email, password);
      toast.success("Signed Up Successfully", { id: "signup" });
    } catch (error) {
      console.log(error);
      toast.error("Signing Up Failed", { id: "signup" });
    }
  };
  useEffect(() => {
    if (auth?.user) {
      return navigate("/");
    }
  }, [auth]);
  return (
    <div className="wrapper">
      <h2>Registration</h2>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Create password" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirm password" required />
        </div>
        <div className="policy">
          <input type="checkbox" />
          <h3>I accept all terms & condition</h3>
        </div>
        <div className="input-box button">
          <input type="Submit" value="Register Now" />
        </div>
        <div className="text">
          <h3>
            Already have an account? <a href="#">Login now</a>
          </h3>
        </div>
      </form>
    </div>
  );
};

export default Signup;
