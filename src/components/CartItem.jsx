import React from 'react'

const CartItem = ({ add, remove }) => {
  console.log(add);

  return (
    <ul>
      {add.map(item => (
        <li class="cart-item">
          <div class="name">{item.name}</div>
          <button
            onClick={() => remove(item)}
          >X</button>
          <div class="price">@ ${item.price}</div>
        </li>
      ))}
    </ul>
  );
}

export default CartItem;