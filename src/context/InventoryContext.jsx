import { createContext, useState, useEffect } from "react";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [currentUser, setCurrentUser] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("currentUser")) ||
      null
    );
  });

  useEffect(() => {
    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );
  }, [users]);

  useEffect(() => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify(currentUser)
    );
  }, [currentUser]);

  // USER FUNCTIONS

  const addUser = (username, password) => {
    const existingUser = users.find(
      (user) => user.username === username
    );

    if (existingUser) {
      return false;
    }

    const newUser = {
      id: Date.now(),
      username,
      password,
      products: [],
      warehouses: [],
      shipments: [],
    };

    setUsers((prev) => [...prev, newUser]);

    return true;
  };

  const loginUser = (username, password) => {
    const user = users.find(
      (u) =>
        u.username === username &&
        u.password === password
    );

    if (user) {
      setCurrentUser(user);
      return true;
    }

    return false;
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  // PRODUCT FUNCTIONS

  const addProduct = (product) => {
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id
        ? {
            ...user,
            products: [
              ...user.products,
              product,
            ],
          }
        : user
    );

    setUsers(updatedUsers);

    const updatedCurrentUser =
      updatedUsers.find(
        (u) => u.id === currentUser.id
      );

    setCurrentUser(updatedCurrentUser);
  };

  const deleteProduct = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id
        ? {
            ...user,
            products: user.products.filter(
              (product) =>
                product.id !== id
            ),
          }
        : user
    );

    setUsers(updatedUsers);

    const updatedCurrentUser =
      updatedUsers.find(
        (u) => u.id === currentUser.id
      );

    setCurrentUser(updatedCurrentUser);
  };

  // WAREHOUSE FUNCTIONS

  const addWarehouse = (warehouse) => {
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id
        ? {
            ...user,
            warehouses: [
              ...user.warehouses,
              warehouse,
            ],
          }
        : user
    );

    setUsers(updatedUsers);

    const updatedCurrentUser =
      updatedUsers.find(
        (u) => u.id === currentUser.id
      );

    setCurrentUser(updatedCurrentUser);
  };

  const deleteWarehouse = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id
        ? {
            ...user,
            warehouses: user.warehouses.filter(
              (warehouse) =>
                warehouse.id !== id
            ),
          }
        : user
    );

    setUsers(updatedUsers);

    const updatedCurrentUser =
      updatedUsers.find(
        (u) => u.id === currentUser.id
      );

    setCurrentUser(updatedCurrentUser);
  };

  // SHIPMENT FUNCTIONS

  const addShipment = (shipment) => {
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id
        ? {
            ...user,
            shipments: [
              ...user.shipments,
              shipment,
            ],
          }
        : user
    );

    setUsers(updatedUsers);

    const updatedCurrentUser =
      updatedUsers.find(
        (u) => u.id === currentUser.id
      );

    setCurrentUser(updatedCurrentUser);
  };

  const deleteShipment = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === currentUser.id
        ? {
            ...user,
            shipments: user.shipments.filter(
              (shipment) =>
                shipment.id !== id
            ),
          }
        : user
    );

    setUsers(updatedUsers);

    const updatedCurrentUser =
      updatedUsers.find(
        (u) => u.id === currentUser.id
      );

    setCurrentUser(updatedCurrentUser);
  };

  return (
    <InventoryContext.Provider
      value={{
        users,
        currentUser,

        addUser,
        loginUser,
        logoutUser,

        addProduct,
        deleteProduct,

        addWarehouse,
        deleteWarehouse,

        addShipment,
        deleteShipment,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};