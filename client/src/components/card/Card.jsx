import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link to={`post/${post.id}`} className="link">
        <span className="title">{post.title}</span>
        <img src={post.img} alt="img" />
        <p className="desc">{post.desc}</p>
        <button className="cardBtn">Read More</button>
      </Link>
    </div>
  );
};

export default Card;
