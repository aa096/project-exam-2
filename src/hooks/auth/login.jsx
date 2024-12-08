import { API_BASE_URL } from "../../API/constants";
import { toast } from "react-toastify";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.errors ? errorData.errors[0].message : "Unknown error");
    }

    const result = await response.json();

    if (result && result.data && result.data.accessToken) {
      const { accessToken, name, email, bio, avatar, banner, venueManager } = result.data;

      const user = { name, email, bio, accessToken, avatar, banner, venueManager };

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", accessToken);
      localStorage.setItem("profileData", JSON.stringify(result.data));

      toast.success("Login successful!", { position: "top-right" });

      return { success: true, message: "Login successful" };
    } else {
      toast.error("Login failed. No access token returned.", { position: "top-right" });
      return { success: false, message: "Login failed. No access token returned." };
    }
  } catch (error) {
    console.error("Login error:", error);
    toast.error(`Login error: ${error.message}`, { position: "top-right" });
    return { success: false, message: error.message };
  }
};
