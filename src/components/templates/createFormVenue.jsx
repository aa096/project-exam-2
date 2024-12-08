import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import { venueSchema } from "../validation/venueSchema";
import { createVenue } from "../../hooks/createVenue";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const CreateVenueForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(venueSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await createVenue(data, token);
      if (response) {
        toast.success("Venue created successfully!");
        setTimeout(() => {
          navigate(`/venues/${response.data.id}`);
        }, 1500);
      }
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(error.message || "An error occurred while creating the venue.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <img src="/assets/holidazerentout.png" alt="Holidaze logo" className="w-[200px] mx-auto mb-2" />
      <h1 className="text-[22px] uppercase text-center mb-6">Add a Venue</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto mb-16">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Venue Name *"
            {...register("name")}
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary"
          />
          {errors.name && <p className="text-[#F3676A] text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Description *"
            {...register("description")}
            className="w-full h-32 border border-primary rounded-lg px-3 py-2 placeholder-primary"
          />
          {errors.description && <p className="text-[#F3676A] text-sm">{errors.description.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="number"
            placeholder="Price *"
            {...register("price")}
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary"
          />
          {errors.price && <p className="text-[#F3676A] text-sm">{errors.price.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="number"
            placeholder="Maximum Guests *"
            {...register("maxGuests")}
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary"
          />
          {errors.maxGuests && <p className="text-[#F3676A] text-sm">{errors.maxGuests.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Image URL (optional)"
            {...register("media[0].url")}
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary mb-1"
          />
          <input
            type="text"
            placeholder="Alt Text (optional)"
            {...register("media[0].alt")}
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary"
          />
          {errors.media && <p className="text-[#F3676A] text-sm">{errors.media.message}</p>}
        </div>

        <div className="mb-4">
          <h2 className="font-medium mb-2">Amenities (optional)</h2>
          <div className="flex flex-wrap gap-4">
            <label>
              <input type="checkbox" {...register("meta.wifi")} className="mr-2" />
              Wifi
            </label>
            <label>
              <input type="checkbox" {...register("meta.parking")} className="mr-2" />
              Parking
            </label>
            <label>
              <input type="checkbox" {...register("meta.breakfast")} className="mr-2" />
              Breakfast
            </label>
            <label>
              <input type="checkbox" {...register("meta.pets")} className="mr-2" />
              Pets
            </label>
          </div>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Address (optional)"
            {...register("location.address")}
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary mb-2"
          />
          <input
            type="text"
            placeholder="City (optional)"
            {...register("location.city")}
            className="w-full border rounded-lg border-primary px-3 py-2 placeholder-primary mb-2"
          />
          <input
            type="text"
            placeholder="Country (optional)"
            {...register("location.country")}
            className="w-full border border-primary rounded-lg px-3 py-2 placeholder-primary"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-primary uppercase text-white py-1 px-4 rounded-xl hover:bg-tertiary transition">
            Publish
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateVenueForm;
