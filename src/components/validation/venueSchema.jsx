// src/validation/venueSchema.js
import * as yup from "yup";

export const venueSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Price is required").positive("Price must be positive"),
  maxGuests: yup
    .number()
    .required("Max guests is required")
    .positive("Must be a positive number")
    .integer("Must be an integer"),
  media: yup.array().of(
    yup.object().shape({
      url: yup.string().url("Must be a valid URL").required("Image URL is required"),
      alt: yup.string().required("Alt text is required"),
    })
  ),
  meta: yup.object().shape({
    wifi: yup.boolean(),
    parking: yup.boolean(),
    breakfast: yup.boolean(),
    pets: yup.boolean(),
  }),
  location: yup.object().shape({
    address: yup.string(),
    city: yup.string(),
    country: yup.string(),
  }),
});
