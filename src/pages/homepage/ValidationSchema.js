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
    .test(
      "indian-phone",
      "Phone number must be a valid Indian number (optionally prefixed with +91)",
      function (value) {
        if (!value) return false;
        // Remove all spaces and dashes
        const cleanNumber = value.replace(/[\s-]/g, "");
        // Check if it matches Indian phone number pattern
        return /^(\+91)?[6-9]\d{9}$/.test(cleanNumber);
      }
    ),
  message: Yup.string()
    .required("Message is required")
    .min(5, "Message must be at least 5 characters"),
});
