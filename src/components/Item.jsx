import React from 'react'

const Item = ({ items, click }) => {

  console.log(items)

  return (
    <ul class="items">
      {items.map(item => (
        <li class="item" key={item.id}>
          <img
            src={item.imageURL} alt={item.description}
          />
          <h2>{item.name}</h2>
          <div class="price">${item.price}</div>
          <div class="description">
            {item.description}
          </div>
          <button
            onClick={() => click(item.name, item.price)}
          >Add to Cart</button>
        </li>
      ))}
    </ul>

  );
}


export default Item;