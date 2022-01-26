import React from "react";
import Button from "../Button";

import "./Item.scss";

const Item = ({ name, address, company }) => {
  return (
    <li className="item">
      <div className="item__row">
        <div className="item__row-name">ФИО: </div>
        <div className="item__row-value">{name}</div>
      </div>
      <div className="item__row">
        <div className="item__row-name">Город: </div>
        <div className="item__row-value">{address.city}</div>
      </div>
      <div className="item__row item__row--btw-space">
        <div className="item__row">
          <div className="item__row-name">Компания: </div>
          <div className="item__row-value">{company.name}</div>
        </div>
        <div className="item__row">
          <Button text="Подробнее" viewType="small" transparent />
        </div>
      </div>
    </li>
  );
};

export default Item;
