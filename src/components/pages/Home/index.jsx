import { useEffect, useState } from "react";
import Book from "./Book";
import Landing from "./Landing";
import Loader from "../../Loader";
import Materiels from "./materiels/materiel";
import Photogames from "./Photogame";
import Hbc from "./homebc";
<<<<<<< HEAD
import Posts from "./Posts";
import Cardd from "./offres";
=======
import CardContainer from "./offres";
>>>>>>> 5ee7c15f54232cc6c007ca0681aa7a508c8a8003

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
      <Posts />
      <Book />
      <Materiels />
      <Photogames />
      <Hbc />
<<<<<<< HEAD
      <Cardd />
=======
      <CardContainer />
>>>>>>> 5ee7c15f54232cc6c007ca0681aa7a508c8a8003
    </>
  );
};

export default Home;
