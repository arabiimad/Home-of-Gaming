import { useEffect, useState } from "react";
import "./index.scss";
import Loader from "../../Loader";

const Admin = () => {
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
    <div className="pt-5">{/* if you removed the <div className="pt-5">, the text would be under the navbar */}
      <h1 className="text-center mt-5 text-white">Admin</h1>
    </div>
  );
};

export default Admin;
