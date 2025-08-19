import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  emailAddress: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(
      /^[0-9]{10}$/,
      "Phone number must be 10 digits and must be a valid number"
    ),
  message: Yup.string()
    .required("Message is required")
    .min(5, "Message must be at least 5 characters"),
});
