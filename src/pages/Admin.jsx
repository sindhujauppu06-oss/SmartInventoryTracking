import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Admin() {
  const { currentUser } =
    useContext(InventoryContext);

  if (!currentUser) {
    return <h2>Please Login</h2>;
  }

  const totalProducts =
    currentUser.products.length;

  const totalWarehouses =
    currentUser.warehouses.length;

  const totalShipments =
    currentUser.shipments.length;

  const lowStock =
    currentUser.products.filter(
      (product) => product.quantity < 10
    ).length;

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <div className="admin-stats">
        <h3>
          Total Products : {totalProducts}
        </h3>

        <h3>
          Total Warehouses :{" "}
          {totalWarehouses}
        </h3>

        <h3>
          Total Shipments : {totalShipments}
        </h3>

        <h3>
          Low Stock Products : {lowStock}
        </h3>
      </div>

      <br />

      <h2>Low Stock Items</h2>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
          </tr>
        </thead>

        <tbody>
          {currentUser.products
            .filter(
              (product) =>
                product.quantity < 10
            )
            .map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;