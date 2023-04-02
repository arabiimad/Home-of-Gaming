import { useEffect, useState } from "react";
import "./index.scss";
import Loader from "../../Loader";

const Bootcamp = () => {
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
    <div className="container">
      <h1 className="m-5 text-center fw-bold">BOOTCAMP</h1>
      <div className="row my-5">
        <div className="col-md-6 bg-secondary p-5">
          <h3 className="text-primary fw-bold mb-3">EN QUOI ÇA CONSISTE ?</h3>
          <p className="lh-lg fw-light fs-5">
            Home of Gaming propose la formule de <br /> bootcamp pour que vous
            puissiez privatiser <br /> la salle et vous réunir afin de jouer ou
            vous <br /> entraîner dans un cadre unique! <br />
          </p>

          <h3 className="text-primary fw-bold mb-3 mt-4">
            QU'EST CE QUI EST COMPRIS ?
          </h3>
          <h5 className="lh-lg fs-4">
            En réservant vous aurez droit à : <br />
          </h5>

          <p className="lh-lg fw-light fs-5">
            L'accès exclusif à l'HOG pour vous et vos amis
            <br />
            L'accès aux 10 PC haut de gamme & aux
          </p>

          <h5 className="lh-lg fs-4">2 salons consoles PS5</h5>
          <p className="lh-lg fw-light fs-5">
            • La possibilité de manger sur place sans <br /> rien prévoir
            (livraison de snacks) <br />
          </p>
          <h3 className="text-primary fw-bold mb-3 mt-4">COMBIEN ÇA COÛTE ?</h3>
          <p className="lh-lg fw-light fs-5">Le tarif est de :</p>
          <ul className="lh-lg fw-light fs-5">
            <li>
              40Dh par personne pour un bootcamp de 3h. <br /> (10 - 15
              personnes).
            </li>
            <li>
              80Dh par personne pour un bootcamp de 3h. <br /> (6 - 9
              personnes).
            </li>
            <li>
              100Dh par personne pour un bootcamp de 3h. <br /> (5 personnes).
            </li>
          </ul>
        </div>

        <div className="col-md-5 ms-auto">
          <form>
            <div className="form-group my-5">
              <label className="my-4 fs-3" htmlFor="nom">
                Nom : <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="nom"
                placeholder="Entrez votre nom"
              />
            </div>

            <div className="form-group my-5">
              <label className="my-4 fs-3" htmlFor="prenom">
                Email Address : <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="prenom"
                placeholder="Entrez votre prénom"
              />
            </div>

            <div className="form-group my-5">
              <label className="my-4 fs-3" htmlFor="adresse">
                Date : <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                className="form-control"
                id="adresse"
                placeholder="Entrez votre adresse"
              />
            </div>

            <div className="form-group my-5">
              <label className="my-4 fs-3" htmlFor="range">
                Nombre de perssones : <span className="text-danger">*</span>
              </label>
              <div className="d-flex align-center justify-content-center">
                <span className="me-3">5</span>
                <input type="range" className="form-range" id="range" />
              </div>
            </div>

            <div className="form-group my-5">
              <label className="my-4 fs-3" htmlFor="message">
                Message :
              </label>
              <textarea
                className="form-control"
                id="message"
                placeholder="Entrez plus de detail"
                rows="3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-lg btn-danger text-light my-3 d-block mx-auto"
            >
              Soumettre
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
