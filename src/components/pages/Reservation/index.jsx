import { useEffect, useState } from "react";
import "./index.scss";
import Loader from "../../Loader";

const Reservation = () => {
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
  return <h1 className="text-center m-5">Reservation component</h1>;
};

export default Reservation;
