import React from "react";
import Button from "../UI/Button";

import "./SortOptions.scss";

const sortList = [
  { id: 1, title: "по городу" },
  { id: 2, title: "по компании" },
];

const SortOptions = () => {
  return (
    <div className="sort-options">
      <ul className="sort-options__list">
        {sortList.map((sort) => (
          <li key={sort.id} className="sort-options__item">
            <Button viewType="small" text={sort.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortOptions;
