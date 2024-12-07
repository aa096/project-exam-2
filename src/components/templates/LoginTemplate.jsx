import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../loginSchema";
import { loginUser } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginHolidaze from "/assets/holidaze2.png";

const LoginTemplate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const goToRegister = () => {
    navigate("/register");
  };

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const result = await loginUser(data.email, data.password);

    if (result.success) {
      toast.success("Logged in successfully!");
      navigate("/profile");
    } else {
      toast.error(result.message || "Failed to log in");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-12">
      <img src={loginHolidaze} alt="Book your Holidaze logo" className="mx-auto w-[200px] mt-6 mb-2" />
      <h1 className="text-[22px] uppercase text-center mb-6">Log in to Holidaze</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="email"
            {...register("email")}
            placeholder="Email *"
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary focus:border-tertiary focus:outline-none"
          />
          {errors.email && <p className="text-[#F3676A] text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="password"
            {...register("password")}
            placeholder="Password *"
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary focus:border-tertiary focus:outline-none"
          />
          {errors.password && <p className="text-[#F3676A] text-sm">{errors.password.message}</p>}
        </div>
        <span>Not a Member? </span>
        <button
          type="button"
          onClick={goToRegister}
          className="text-primary uppercase underline font-semibold hover:text-tertiary ml-3">
          Sign up here
        </button>
        <div className="flex">
          <button
            type="submit"
            className="bg-primary mx-auto uppercase text-white px-4 py-1 rounded-full hover:bg-tertiary hover:text-primary transition mt-3">
            Log In
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default LoginTemplate;
