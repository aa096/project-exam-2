import { Helmet } from "react-helmet";
import ProfilePage from "../hooks/auth/profilePage";

function Profile() {
  return (
    <div>
      <Helmet>
        <title>Your Profile - Holidaze</title>
         <meta name="description" content="View and manage your profile on Holidaze. Update your personal information, bookings, and preferences for a better travel experience." />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <ProfilePage />
      </main>
    </div>
  );
}

export default Profile;
