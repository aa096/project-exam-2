import registerHolidaze from "/assets/holidaze2.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "../validation/validationSchemas";
import { registerUser } from "../../hooks/auth";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterTemplate = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registrationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const updatedData = {
        ...data,
        venueManager: data.rentOrRentOut === "rentOut",
      };

      await registerUser(updatedData);
      toast.success("User registered successfully!");
    } catch {
      toast.error("An error occurred");
    }
  };
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <img src={registerHolidaze} alt="Book your Holidaze logo" className="mx-auto w-[200px] mt-6 mb-2" />
      <h1 className="text-[22px] uppercase text-center mb-6">Sign Up to Holidaze</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Username *"
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary focus:border-tertiary focus:outline-none"
          />
          {errors.name && <p className="text-[#F3676A] text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Email *"
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary focus:border-tertiary focus:outline-none"
          />
          {errors.email && <p className="text-[#F3676A]  text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Password *"
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary focus:border-tertiary focus:outline-none"
          />
          {errors.password && <p className="text-[#F3676A]  text-sm">{errors.password.message}</p>}
        </div>

        <div className="mb-4">
          <textarea
            id="bio"
            {...register("bio")}
            placeholder="Bio (optional)"
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary focus:border-tertiary focus:outline-none"
          />
          {errors.bio && <p className="text-[#F3676A]  text-sm">{errors.bio.message}</p>}
        </div>
        <div>
          <span>Already a Member? </span>
          <button
            type="button"
            onClick={goToLogin}
            className="text-primary uppercase underline font-semibold hover:text-tertiary ml-3">
            Go to Login
          </button>
        </div>

        <div className="mb-4">
          <h2 className="uppercase font-medium my-2 text-lg">What kind of Holidazer are you? *</h2>
          <div className="flex items-center space-x-4">
            <div>
              <input
                type="radio"
                id="rent"
                value="rent"
                {...register("rentOrRentOut")}
                className="mr-2 accent-primary focus:ring-tertiary"
              />
              <label htmlFor="rent" className="font-medium">
                I&apos;m Looking to Rent
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="rentOut"
                value="rentOut"
                {...register("rentOrRentOut")}
                className="mr-2 accent-primary focus:ring-tertiary"
              />
              <label htmlFor="rentOut" className="font-medium">
                I&apos;m Looking to Rent Out
              </label>
            </div>
          </div>
          {errors.rentOrRentOut && <p className="text-[#F3676A]  text-sm">{errors.rentOrRentOut.message}</p>}
        </div>

        <div className="flex">
          <button
            type="submit"
            className="bg-primary mx-auto uppercase text-white px-4 py-1 rounded-full hover:bg-tertiary hover:text-primary transition">
            Sign Up
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterTemplate;
