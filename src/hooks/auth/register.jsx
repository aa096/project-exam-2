import { API_BASE_URL } from "../../API/constants";
import { registrationSchema } from "../../components/validation/validationSchemas";
import { toast } from "react-toastify";

export async function registerUser(profile) {
  const registerURL = `${API_BASE_URL}/auth/register`;

  try {
    await registrationSchema.validate(profile, { abortEarly: false });

    const response = await fetch(registerURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profile),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage = errorResponse?.errors?.[0]?.message || "Registration failed. Please try again.";

      throw new Error(errorMessage);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    toast.error(`Registration failed: ${error.message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    throw error;
  }
}
