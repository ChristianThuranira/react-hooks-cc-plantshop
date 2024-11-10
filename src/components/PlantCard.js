import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant, onDeletePlant }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(plant.price);

  function handleToggleStock() {
    onUpdatePlant({ ...plant, inStock: !plant.inStock });
  }

  function handlePriceUpdate() {
    onUpdatePlant({ ...plant, price: newPrice });
    setIsEditing(false);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {isEditing ? (
        <input
          type="number"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          onBlur={handlePriceUpdate}
        />
      ) : (
        <p>Price: ${plant.price}</p>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit Price"}
      </button>
      <button onClick={handleToggleStock}>
        {plant.inStock ? "In Stock" : "Out of Stock"}
      </button>
      <button onClick={() => onDeletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;
