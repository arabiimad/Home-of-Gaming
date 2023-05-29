import React from 'react';
import './index.scss'; // Assuming you've named your SCSS file as Card.scss

const Card = ({ title, content }) => (
  <div className="card">
    <div className="content">
      <p className="heading">{title}</p>
      <p className="para">{content}</p>
      <button className="btn">Read more</button>
    </div>
  </div>
);

const CardContainer = () => (
  <div className="card-container">
    <Card title="Card Hover Effect 1" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur" />
    <Card title="Card Hover Effect 2" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur" />
    <Card title="Card Hover Effect 3" content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur" />
  </div>
);

export default CardContainer;
