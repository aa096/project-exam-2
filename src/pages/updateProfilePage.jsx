import { Helmet } from "react-helmet";
import UpdateProfile from "../components/templates/UpdateProfileTemplate";

function UpdateProfilePage() {
  return (
    <div>
      <Helmet>
        <title>Holidaze - </title>
        <meta name="description" content="" />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <UpdateProfile />
      </main>
    </div>
  );
}

export default UpdateProfilePage;
