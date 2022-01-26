import React from "react";

import Title from "../../components/UI/Title";
import List from "../../components/UI/List";
import Item from "../../components/UI/Item";
import Container from "../../components/UI/Container";

import { DataContext } from "../../context/DataContext";
import SortOptions from "../../components/SortOptions";

const UserList = () => {
  const { users } = React.useContext(DataContext);

  return (
    <div className="users-page">
      <Container>
        <div className="block">
          <div className="row">
            <SortOptions />
          </div>
          <div className="row">
            <Title text="Список пользователей" />
            <List length={users?.length}>
              {users?.map((user) => (
                <Item key={user.id} {...user} />
              ))}
            </List>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserList;
