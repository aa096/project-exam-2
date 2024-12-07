import { useEffect, useState } from "react";
import { PROFILES_URL, API_KEY } from "../../API/constants";
import ProfileTemplate from "../../components/templates/ProfileTemplate";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user?.name || !token) {
      console.error("Missing profile name or access token");
      setIsLoading(false);
      return;
    }

    const fetchProfileData = async () => {
      try {
        const url = `${PROFILES_URL}/${user.name}`;
        const headers = {
          Authorization: `Bearer ${token}`,
          "X-Noroff-API-Key": API_KEY,
        };

        const response = await fetch(url, {
          method: "GET",
          headers: headers,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch profile data. Status: ${response.status}`);
        }

        const data = await response.json();

        setProfileData(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setIsLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    return <div>No profile data available</div>;
  }

  return <ProfileTemplate profileData={profileData} />;
};

export default ProfilePage;
