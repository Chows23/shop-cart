import React from 'react';

const Cart = ({total}) => {
  let totalPrice = 0;
  for(let i = 0; i < total.length; i++) {
    totalPrice += total[i].price
  }
  return (
    <div class="total">Total: ${totalPrice.toFixed(2)}</div>
  );
}

export default Cart;