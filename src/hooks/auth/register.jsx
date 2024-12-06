import { API_BASE_URL } from "../../API/constants";
import { registrationSchema } from "../../components/validationSchemas";

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
    console.error("Error during registration:", error);

    throw new Error(error.message || "Registration failed. Please try again.");
  }
}
