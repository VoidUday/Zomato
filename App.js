import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";

const Header = () => {
  return (
    <div className="header">
      <div id="logo">
        <img
          className="logo-img"
          src="https://pngimagesfree.com/wp-content/uploads/Swiggy-Logo-PNG.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li className="items">Swiggy Corporate</li>
          <li className="items">Offers</li>
          <li className="items">Help</li>
          <li className="items">Sign in</li>
          <li className="items">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <div className="res-img">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/f7bb006db1236c6bb82a4c082a8c60b0" />
      </div>
      <h3 className="offer-text">₹ 135 OFF ABOVE ₹ 399</h3>
      <div className="res-name">
        <h4>Biryani Blues</h4>
      </div>
      <div className="rating">
        <h4>3⭐</h4>
      </div>
      <div className="cuisine">
        <h4>Biryani, Italian, indian</h4>
      </div>
      <div className="location">
        <h4>Noida sec-62</h4>
      </div>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
      {/* <div className="footer">Footer</div> */}
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
