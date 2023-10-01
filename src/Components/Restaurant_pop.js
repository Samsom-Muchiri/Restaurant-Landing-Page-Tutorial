import React, { useEffect, useState } from "react";
import "../restaurant_pop_styles.css";
import Loader from "./Loader";
import { FiArrowRight } from "react-icons/fi";

function Restaurant_pop({ state, setState, activeRt }) {
  const [ready, setReady] = useState(false);
  const [popData, setPopData] = useState([]);

  const restaurantUrl = "http://127.0.0.1:5555/restaurants/";
  const orderUrl = "http://127.0.0.1:5555/restaurant_pizzas";
  useEffect(() => {
    fetch(restaurantUrl + activeRt)
      .then((res) => res.json())
      .then((data) => {
        setPopData(data);
        setReady(true);
      })
      .catch((error) => console.log(error));
  }, []);

  function orderPizza(pizza_id, restaurant_id) {
    fetch(orderUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        price: 10,
        pizza_id: pizza_id,
        restaurant_id: restaurant_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(
          `You have successfully orderd ${data.name} with ingredients ${data.ingredients}`
        );
        setReady(true);
      })
      .catch((error) => console.log(error));
  }
  const pizzaData = popData.pizzas;
  console.log(pizzaData);
  return (
    <div className="pop-container">
      <div className="pop-content">
        <div className="close-pop">
          <div onClick={() => setState(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </div>
        </div>

        {ready ? (
          <>
            <h1>{popData.name}</h1>
            <h2>Address</h2>
            <p>{popData.address}</p>
            <h2>Pizza</h2>
            {pizzaData.map((pz) => {
              return (
                <div key={pz.ingredients}>
                  <h3>{pz.name}</h3>
                  <p>Ingredients</p>
                  <ul>
                    <li>{pz.ingredients}</li>
                  </ul>
                  <button
                    className="order-button"
                    onClick={() => orderPizza(pz.id, popData.id)}
                  >
                    Order Now <FiArrowRight />
                  </button>
                </div>
              );
            })}
          </>
        ) : (
          <div className="loader-box">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}

export default Restaurant_pop;
