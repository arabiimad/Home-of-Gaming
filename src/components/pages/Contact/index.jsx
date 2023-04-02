import { useEffect, useState } from "react";
import "./index.scss";
import Loader from "../../Loader";

const Contact = () => {
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

  return <h1 className="m-5 text-center">Contact component</h1>;
};

export default Contact;
