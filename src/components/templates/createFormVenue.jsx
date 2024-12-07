import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { venueSchema } from "../validation/venueSchema";
import { createVenue } from "../../hooks/createVenue";
import "react-toastify/dist/ReactToastify.css";

const CreateVenueForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(venueSchema),
  });

  const onSubmit = async (data) => {
    console.log("Submitting venue data:", data);
    const token = localStorage.getItem("accessToken");
    try {
      await createVenue(data, token);
      toast.success("Venue created successfully!");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error(error.message || "An error occurred while creating the venue.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-6">Create a New Venue</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Venue Name *"
            {...register("name")}
            className="w-full border rounded-lg px-3 py-2 placeholder-gray-400"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Description *"
            {...register("description")}
            className="w-full border rounded-lg px-3 py-2 placeholder-gray-400"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="number"
            placeholder="Price *"
            {...register("price")}
            className="w-full border rounded-lg px-3 py-2 placeholder-gray-400"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="number"
            placeholder="Maximum Guests *"
            {...register("maxGuests")}
            className="w-full border rounded-lg px-3 py-2 placeholder-gray-400"
          />
          {errors.maxGuests && <p className="text-red-500 text-sm">{errors.maxGuests.message}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Image URL (optional)"
            {...register("media[0].url")}
            className="w-full border rounded-lg px-3 py-2 placeholder-gray-400 mb-2"
          />
          <input
            type="text"
            placeholder="Alt Text (optional)"
            {...register("media[0].alt")}
            className="w-full border rounded-lg px-3 py-2 placeholder-gray-400"
          />
          {errors.media && <p className="text-red-500 text-sm">{errors.media.message}</p>}
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
            className="w-full border rounded-lg px-3 py-2 placeholder-gray-400 mb-2"
          />
          <input
            type="text"
            placeholder="City (optional)"
            {...register("location.city")}
            className="w-full border rounded-lg px-3 py-2 placeholder-gray-400 mb-2"
          />
          <input
            type="text"
            placeholder="Country (optional)"
            {...register("location.country")}
            className="w-full border rounded-lg px-3 py-2 placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-tertiary transition">
          Create Venue
        </button>
      </form>
    </div>
  );
};

export default CreateVenueForm;
