import * as yup from "yup";

export const updateProfileSchema = yup.object().shape({
  bio: yup.string().optional(),
  avatar: yup.object().shape({
    url: yup.string().url("Avatar URL must be a valid URL").optional(),
    alt: yup.string().optional(),
  }),
  banner: yup.object().shape({
    url: yup.string().url("Banner URL must be a valid URL").optional(),
    alt: yup.string().optional(),
  }),
  venueManager: yup.boolean().optional(),
});
