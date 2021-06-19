import React, { useState } from 'react';
import './style.css';
import Card from './Card';
import { FaShoppingCart } from 'react-icons/fa';
import { FcRating } from 'react-icons/fc';

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCart = () => {
    setCount(count + 1);
    console.log('add');
  };

  const decrementCart = () => {
    setCount(count - 1);
    console.log('remove');
  };

  const rating = (
    <>
      <FcRating />
      <FcRating />
      <FcRating />
      <FcRating />
      <FcRating />
    </>
  );

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <a className="navbar-brand col-md-3" href="#">
                Home
              </a>
            </div>
            <div className="col-md-3">
              <a className="navbar-brand col-md-3" href="#">
                About
              </a>
            </div>
            <div className="col-md-3">
              <a className="navbar-brand col-md-3" href="#">
                Shop
              </a>
            </div>
          </div>
          <div className="col-md-2 float-right">
            <button className="btn btn-outline-dark">
              <span>
                <FaShoppingCart />
              </span>
              <span className="ms-2">Cart</span>
              <span className="ms-2">{count}</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="text-center text-white bg-dark pt-5 pb-5">
        <h1>Shop in Style</h1>
        <h5>With this shop homepage template</h5>
      </div>

      <div className="container">
        <div className="row">
          <Card
            itemType="Fancy Product"
            addCart={incrementCart}
            removeCart={decrementCart}
            price="$40.00 - $80.00"
          />
          <Card
            itemType="Special Item"
            addCart={incrementCart}
            removeCart={decrementCart}
            rating={rating}
            price={
              <>
                <span className="text-muted ">
                  <del>$20.00</del>
                </span>
                <span className="ms-2">$18.00</span>
              </>
            }
          />
          <Card
            itemType="Sale Item"
            addCart={incrementCart}
            removeCart={decrementCart}
            price={
              <>
                <span className="text-muted ">
                  <del>$50.00</del>
                </span>
                <span className="ms-2">$25.00</span>
              </>
            }
          />
          <Card
            itemType="Popular Item"
            addCart={incrementCart}
            removeCart={decrementCart}
            rating={rating}
            price="$40.00"
          />
          <Card
            itemType="Sale Item"
            addCart={incrementCart}
            removeCart={decrementCart}
            price={
              <>
                <span className="text-muted ">
                  <del>$50.00</del>
                </span>
                <span className="ms-2">$25.00</span>
              </>
            }
          />
          <Card
            itemType="Fancy Product"
            addCart={incrementCart}
            removeCart={decrementCart}
            price="$120.00 - $280.00"
          />
          <Card
            itemType="Special Item"
            addCart={incrementCart}
            removeCart={decrementCart}
            rating={rating}
            price={
              <>
                <span className="text-muted ">
                  <del>$20.00</del>
                </span>
                <span className="ms-2">$18.00</span>
              </>
            }
          />
          <Card
            itemType="Popular Item"
            addCart={incrementCart}
            removeCart={decrementCart}
            rating={rating}
            price="$40.00"
          />
        </div>
      </div>

      <div className="text-center bg-dark text-white pt-5 pb-5">
        <h5>Copyright © Your Website 2021</h5>
      </div>
    </>
  );
}
