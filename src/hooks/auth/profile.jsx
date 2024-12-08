import { useEffect, useState } from "react";
import { fetchProfileData } from "./fetchProfile";
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

    const fetchData = async () => {
      try {
        const data = await fetchProfileData(user, token);
        setProfileData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching profile data:", error);
      }
    };

    fetchData();
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
