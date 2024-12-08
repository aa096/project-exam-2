import { Helmet } from "react-helmet";
import RegisterTemplate from "../components/templates/Register";

function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>Holidaze - Register for Your Getaway</title>
        <meta
          name="description"
          content="Create your account on Holidaze to easily book your dream holiday. Get started today and explore the best destinations with a few simple steps!"
        />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <RegisterTemplate />
      </main>
    </div>
  );
}

export default RegisterPage;
