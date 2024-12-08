import VenuePage from "../components/templates/VenuePage";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

function Venue() {
  const [venueName, setVenueName] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  useEffect(() => {
    if (venueName) {
      document.title = `${venueName} | Holidaze`;
      setMetaDescription(`Book your stay at ${venueName} with Holidaze for an unforgettable experience.`);
    }
  }, [venueName]);

  return (
    <div>
      <Helmet>
        <title>{venueName} | Holidaze</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <main className="container flex flex-wrap justify-center">
        <VenuePage setVenueName={setVenueName} />
      </main>
    </div>
  );
}

export default Venue;
