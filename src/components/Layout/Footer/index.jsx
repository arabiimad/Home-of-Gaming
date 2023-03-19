const Footer = () => {
  return (
    <footer id="footer" className="bg-primary p-5 mt-5">
      <h1>HOME OF GAMING</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        fugiat, ipsa quos nulla qui alias.
      </p>
      <div className="social-links">
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-pinterest-p"></i>
      </div>
      <div className="credit">
        <p>
          Designed By <a href="#">SA Coding</a>
        </p>
      </div>
      <div className="copyright">
        <p>&copy;Copyright SA Coding. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
