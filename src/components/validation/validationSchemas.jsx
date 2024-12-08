import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[\w]+$/, "The name value must not contain punctuation symbols apart from underscore (_)")
    .required("Username is required"),
  email: yup
    .string()
    .email("The email must be valid")
    .matches(/^[\w.]+@stud\.noroff\.no$/, "The email value must be a valid stud.noroff.no email address")
    .required("E-mail is required"),
  password: yup.string().min(8, "The password value must be at least 8 characters").required("Password is required"),
  bio: yup.string().max(160, "If set, the bio value must be less than 160 characters").optional(),
  // avatar: yup.object().shape({
  //     url: yup
  //       .string()
  //       .url("If set, the avatar.url value must be a valid and accessible URL")
  //       .optional(),
  //     alt: yup
  //       .string()
  //       .max(120, "If set, the avatar alt-text value must be less than 120 characters")
  //       .optional()
  //       .when("url", {
  //         is: (url) => !!url, // Check if URL exists
  //         then: yup.string().required("Avatar ALT text is required when URL is set"),
  //       }),
  //   }),

  //   banner: yup.object().shape({
  //     url: yup
  //       .string()
  //       .url("If set, the banner URL value must be a valid and accessible URL")
  //       .optional(),
  //     alt: yup
  //       .string()
  //       .max(120, "If set, the banner ALT value must be less than 120 characters.")
  //       .optional()
  //       .when("url", {
  //         is: (url) => !!url, // Check if URL exists
  //         then: yup.string().required("Banner ALT text is required when URL is set"),
  //       }),
  //   }),

  rentOrRentOut: yup
    .string()
    .oneOf(["rent", "rentOut"], "Please select whether you're looking to rent or rent out a venue")
    .required("Please select whether you're looking to rent or rent out a venue"),
});
