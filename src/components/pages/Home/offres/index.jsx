import React from 'react';
import './index.scss';

const Cardd = ({ title, body, buttonText }) => (
  <div className="cardd">
    <div className="cardd-content">
      <h2 className="cardd-title">{title}</h2>
      <p className="cardd-body">{body}</p>
      <a href="#" className="button">
        {buttonText}
      </a>
    </div>
  </div>
);

const Card = () => (
  <div className="cardd-container">
    <Cardd
      title="Abonnement 1"
      body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
      buttonText="Learn More"
    />
    <Cardd
      title="Abonnement 2"
      body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
      buttonText="Discover"
    />
    <Cardd
      title="Abonnement 3"
      body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa."
      buttonText="Get Started"
    />
  </div>
);

export default Card;
