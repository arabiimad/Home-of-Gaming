import { useEffect, useState } from "react";
import Book from "./Book";
import Landing from "./Landing";
import Loader from "../../Loader";

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
    </>
  );
};

export default Home;
