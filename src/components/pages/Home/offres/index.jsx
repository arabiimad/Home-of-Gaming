import React from 'react';
<<<<<<< HEAD
import './index.scss';

const Cardd = ({ title, body, buttonText }) => (
  <div className="cardd">
    <div className="cardd-content">
      <h2 className="cardd-title">{title}</h2>
      <p className="cardd-body">{body}</p>
      <a href="#" className="button">
        {buttonText}
      </a>
=======
import './index.scss'; // Assuming you've named your SCSS file as Card.scss

const Card = ({ title, content }) => (
  <div className="card">
    <div className="content">
      <p className="heading">{title}</p>
      <p className="para">{content}</p>
      <button className="btn">Read more</button>
>>>>>>> 5ee7c15f54232cc6c007ca0681aa7a508c8a8003
    </div>
  </div>
);

<<<<<<< HEAD
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
=======
const CardContainer = () => (
  <div className="card-container">
    <Card title="Card Hover Effect 1" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur" />
    <Card title="Card Hover Effect 2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur" />
    <Card title="Card Hover Effect 3" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur" />
  </div>
);

export default CardContainer;
>>>>>>> 5ee7c15f54232cc6c007ca0681aa7a508c8a8003
