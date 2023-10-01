import React, { useEffect, useState } from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Restaurants = ({ state, setState, setRt }) => {
  const [ready, setReady] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5555/restaurants")
      .then((res) => res.json())
      .then((data) => {
        setReady(true);
        setRestaurantData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const workInfoData = [
    {
      image: PickMeals,
      name: "Pick Meals",
      address:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: ChooseMeals,
      name: "Choose How Often",
      address: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: DeliveryMeals,
      name: "Fast Deliveries",
      address:
        "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  function activete(name) {
    setRt(name);
    setState(true);
  }
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Restaurants</h1>
        <p className="primary-text">
          See the best available resturants in town
        </p>
      </div>
      <div className="work-section-bottom">
        {restaurantData.map((data) => (
          <div
            className="work-section-info hover-card"
            key={data.title}
            onClick={() => activete(1)}
          >
            <div className="info-boxes-img-container">
              <img src={PickMeals} alt="" />
            </div>
            <h2>{data.name}</h2>
            <p>{data.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
