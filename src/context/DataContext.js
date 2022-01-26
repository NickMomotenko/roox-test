import React, { useEffect } from "react";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    fetchedUsersData();
  }, []);

  function fetchedUsersData() {
    const url = `https://jsonplaceholder.typicode.com/users`;

    fetch(url)
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }

  return (
    <DataContext.Provider value={{ users }}>{children}</DataContext.Provider>
  );
};
