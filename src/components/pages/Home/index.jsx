import { useEffect, useState } from "react";
import Book from "./Book";
import Landing from "./Landing";
import Loader from "../../Loader";
import Materiels from "./materiels/materiel";
import Photogames from "./Photogame"
import Hbc from "./homebc";
import CardContainer from "./offres";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Landing />
      <Book />
      <Materiels/>
      <Photogames/>
      <Hbc />
      <CardContainer />
    </>
  );
};

export default Home;
