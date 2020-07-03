import React from "react";
import { NavItem } from "shards-react";
import { GiTwoCoins } from "react-icons/gi";

const Coins = () => {
  return (
    <NavItem className="border-right text-nowrap">
      <div
        className="px-3"
        style={{
          height: 60,
          paddingTop: 10,
        }}
      >
        <span
          className="d-md-inline-block text-center nav-link"
          style={{
            cursor: "default",
            textTransform: "uppercase",
          }}
        >
          <GiTwoCoins color="#c3c7cc" size={24} /> 300 Moedas
        </span>
      </div>
    </NavItem>
  );
};

export default Coins;
