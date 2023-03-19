const Book = () => {
  return (
    <section class="book mt-5" id="book">
      <div class="container">
        <div class="main-text">
          <h1>
            <span>S</span>UIVI DU STATU EL TEMPS REEL *{" "}
          </h1>
        </div>

        <div class="row justify-content-between">
          <div class="col-lg-5 py-3 py-md-0">
            <h2>
              Home of Gaming <br /> la référence Gaming à <br /> Quida
            </h2>
            <p>
              Viens seul ou avec les amis et profites de <br /> Jouer aux leux
              du moment dans un cadre <br /> convivial et vis une expérience
              unique <br /> dans la région !
            </p>
            <p>
              Tu t'ennuies chez toi, t'as du temps de <br /> ilibre ? Passe
              faire un tour !
            </p>
          </div>

          <div class="col-lg-5  py-3 py-md-0">
            <div class="card">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="scrol carousel-inner">
                  <div class=" carousel-item active">
                    <img
                      src="./images/img1.jpeg"
                      height="600"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="./images/img2.jpeg"
                      height="600"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="./images/img3.jpeg"
                      height="600"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
