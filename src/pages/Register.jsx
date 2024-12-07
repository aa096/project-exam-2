import { Helmet } from "react-helmet";
import RegisterTemplate from "../components/templates/Register";

function RegisterPage() {
  return (
    <div>
      <Helmet>
        <title>Holidaze - </title>
        <meta name="description" content="" />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <RegisterTemplate />
      </main>
    </div>
  );
}

export default RegisterPage;
