import React from "react";

import "./List.scss";

const List = ({ children, length }) => {
  return (
    <div className="list">
      <ul className="list__content">{children}</ul>
      <div className="list__length">Найдено {length} пользователей</div>
    </div>
  );
};

export default List;
