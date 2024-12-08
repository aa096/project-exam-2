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
      navigate("/profile");
    } catch (error) {
      toast.error("An error occurred while updating the profile.", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-[22px] uppercase text-center mb-6">Update Your Profile</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <textarea
            id="bio"
            {...register("bio")}
            placeholder="Update your bio"
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary focus:border-tertiary focus:outline-none"
          />
          {errors.bio && <p className="text-[#F3676A] text-sm mt-1">{errors.bio.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="avatarUrl"
            {...register("avatar.url")}
            placeholder="Avatar Image URL"
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary focus:border-tertiary focus:outline-none"
          />
          {errors.avatar?.url && <p className="text-[#F3676A] text-sm">{errors.avatar?.url.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="bannerUrl"
            {...register("banner.url")}
            placeholder="Banner Image URL"
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary focus:border-tertiary focus:outline-none"
          />
          {errors.banner?.url && <p className="text-[#F3676A] text-sm">{errors.banner?.url.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="venueManager" className="font-medium">
            Are you a venue manager?
          </label>
          <input
            type="checkbox"
            id="venueManager"
            {...register("venueManager")}
            className="accent-primary focus:ring-tertiary"
          />
          {errors.venueManager && <p className="text-[#F3676A] text-sm">{errors.venueManager.message}</p>}
        </div>

        <div className="flex">
          <button
            type="submit"
            className="bg-primary mx-auto uppercase text-white px-4 py-1 rounded-full hover:bg-tertiary hover:text-primary transition">
            Update Profile
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
