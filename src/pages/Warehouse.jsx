import { useState, useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Warehouse() {
  const {
    currentUser,
    addWarehouse,
    deleteWarehouse,
  } = useContext(InventoryContext);

  if (!currentUser) {
    return <h2>Please Login</h2>;
  }

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [selectedWarehouse, setSelectedWarehouse] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addWarehouse({
      id: Date.now(),
      name,
      location,
      capacity,
    });

    setName("");
    setLocation("");
    setCapacity("");
  };

  const filteredWarehouses =
    selectedWarehouse
      ? currentUser.warehouses.filter(
          (warehouse) =>
            warehouse.name === selectedWarehouse
        )
      : currentUser.warehouses;

  return (
    <div>
      <h1>Warehouse</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Warehouse Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
          required
        />

        <button type="submit">
          Save Warehouse
        </button>
      </form>

      <h3>Warehouse Filter</h3>

      <select
        value={selectedWarehouse}
        onChange={(e) =>
          setSelectedWarehouse(e.target.value)
        }
      >
        <option value="">
          All Warehouses
        </option>

        {currentUser.warehouses.map(
          (warehouse) => (
            <option
              key={warehouse.id}
              value={warehouse.name}
            >
              {warehouse.name}
            </option>
          )
        )}
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>Capacity</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredWarehouses.map(
            (warehouse) => (
              <tr key={warehouse.id}>
                <td>{warehouse.name}</td>
                <td>{warehouse.location}</td>
                <td>{warehouse.capacity}</td>

                <td>
                  <button
                    onClick={() =>
                      deleteWarehouse(
                        warehouse.id
                      )
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Warehouse;