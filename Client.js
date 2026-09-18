import React from "react";

function Client({ name, image }) {
  return (
    <div className="client-logo-card">
      <div className="client-logo-image">
        <img src={image} alt={name} />
      </div>

      <p>{name}</p>
    </div>
  );
}

export default Client;
