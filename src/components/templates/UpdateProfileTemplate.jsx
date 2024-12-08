import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateProfileSchema } from "../validation/updateProfileSchema";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { updateProfile } from "../../hooks/updateProfile";
import { fetchProfileData } from "../../hooks/auth/fetchProfile";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateProfileSchema),
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      const user = JSON.parse(localStorage.getItem("user"));

      if (!token || !user) {
        toast.error("User or token missing");
        return;
      }

      try {
        const profileData = await fetchProfileData(user, token);
        setProfile(profileData);

        setValue("bio", profileData.bio || "");
        setValue("avatar.url", profileData.avatar?.url || "");
        setValue("avatar.alt", profileData.avatar?.alt || "");
        setValue("banner.url", profileData.banner?.url || "");
        setValue("banner.alt", profileData.banner?.alt || "");
        setValue("venueManager", profileData.venueManager || false);
      } catch (error) {
        toast.error("Error fetching profile data", error);
      }
    };

    fetchProfile();
  }, [setValue]);

  const onSubmit = async (data) => {
    const updatedData = {
      ...data,
      name: profile.name,
      venueManager: data.venueManager,
    };

    try {
      await updateProfile(updatedData);
      toast.success("Profile updated successfully!");
      setTimeout(() => {
        navigate("/profile");
      }, 2000);
    } catch (error) {
      toast.error("An error occurred while updating the profile.", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-[22px] uppercase text-center mb-6">Edit Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto ">
        <div className="mb-6">
          <label htmlFor="bio" className="font-medium">
            Bio
          </label>
          <textarea
            id="bio"
            {...register("bio")}
            className="w-full h-32 border border-primary rounded-lg px-3 py-2 focus:border-tertiary focus:outline-none"
          />
          {errors.bio && <p className="text-[#F3676A] text-sm mt-1">{errors.bio.message}</p>}
        </div>

        <div className="mb-1">
          <label htmlFor="avatarUrl" className="font-medium">
            Avatar Image URL
          </label>
          <input
            type="text"
            id="avatarUrl"
            {...register("avatar.url")}
            className="w-full border border-primary rounded-lg px-3 py-2 focus:border-tertiary focus:outline-none"
          />
          {errors.avatar?.url && <p className="text-[#F3676A] text-sm">{errors.avatar?.url.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="avatarAlt" className="font-medium">
            Alt Text
          </label>
          <input
            type="text"
            id="avatarAlt"
            {...register("avatar.alt")}
            className="w-full border border-primary rounded-lg px-3 py-2 focus:border-tertiary focus:outline-none"
          />
          {errors.avatar?.alt && <p className="text-[#F3676A] text-sm">{errors.avatar?.alt.message}</p>}
        </div>

        <div className="mb-1">
          <label htmlFor="bannerUrl" className="font-medium">
            Banner Image URL
          </label>
          <input
            type="text"
            id="bannerUrl"
            {...register("banner.url")}
            className="w-full border border-primary rounded-lg px-3 py-2 focus:border-tertiary focus:outline-none"
          />
          {errors.banner?.url && <p className="text-[#F3676A] text-sm">{errors.banner?.url.message}</p>}
        </div>

        <div className="mb-8">
          <label htmlFor="bannerAlt" className="font-medium">
            Alt Text
          </label>
          <input
            type="text"
            id="bannerAlt"
            {...register("banner.alt")}
            className="w-full border border-primary rounded-lg px-3 py-2 focus:border-tertiary focus:outline-none"
          />
          {errors.banner?.alt && <p className="text-[#F3676A] text-sm">{errors.banner?.alt.message}</p>}
        </div>

        <h2 className="uppercase font-medium my-2 text-l">What kind of Holidazer are you? *</h2>
        <div className="flex items-center space-x-4">
          <div>
            <input
              type="radio"
              id="lookingToRent"
              value={true}
              {...register("venueManager")}
              className="mr-2 accent-primary focus:ring-tertiary"
            />
            <label htmlFor="lookingToRent" className="font-medium">
              I&apos;m Looking to Rent Out
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="lookingToRentOut"
              value={false}
              {...register("venueManager")}
              className="mr-2 accent-primary focus:ring-tertiary"
            />
            <label htmlFor="lookingToRentOut" className="font-medium">
              I&apos;m Looking to Rent
            </label>
          </div>
        </div>
        {errors.venueManager && <p className="text-[#F3676A] text-sm">{errors.venueManager.message}</p>}

        <div className="flex mt-6">
          <button
            type="submit"
            className="bg-primary mx-auto uppercase text-white px-4 py-1 rounded-full hover:bg-tertiary hover:text-primary transition">
            Edit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
