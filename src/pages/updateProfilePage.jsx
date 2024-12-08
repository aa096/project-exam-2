import { Helmet } from "react-helmet";
import UpdateProfile from "../components/templates/UpdateProfileTemplate";

function UpdateProfilePage() {
  return (
    <div>
      <Helmet>
        <title>Update your Profile - Holidaze - </title>
        <meta name="description" content="Update your personal details and preferences on Holidaze. Keep your information up-to-date for a personalized travel experience." />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <UpdateProfile />
      </main>
    </div>
  );
}

export default UpdateProfilePage;
