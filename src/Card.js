import React, { useState } from 'react';

export default function Card(props) {
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = () => {
    if (addedToCart) {
      setAddedToCart(false);
      props.removeCart();
    } else {
      setAddedToCart(true);
      props.addCart();
    }
  };

  return (
    <>
      <div className="col-md-3 mt-5 mb-5">
        <div className="card">
          <img
            clasName="img-fluid card-img-top"
            src="https://dummyimage.com/285x200/000/fff"
          />

          <div className="card-body text-center" style={{ height: 125 }}>
            <h4>{props.itemType}</h4>
            <div>{props.rating}</div>
            <div className="mt-2 mb-1">{props.price}</div>
          </div>
          <div className="text-center mb-4">
            <button
              className="btn btn-block btn-outline-dark"
              onClick={() => addToCart()}
            >
              {addedToCart ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
