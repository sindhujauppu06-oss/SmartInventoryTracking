import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";
import SummaryCard from "../components/SummaryCard";

function Dashboard() {
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
      (product) => Number(product.quantity) < 10
    ).length;

  return (
    <div>
      <h1>
        Welcome, {currentUser.username}
      </h1>

      <div className="cards-container">
        <SummaryCard
          title="Products"
          value={totalProducts}
        />

        <SummaryCard
          title="Warehouses"
          value={totalWarehouses}
        />

        <SummaryCard
          title="Shipments"
          value={totalShipments}
        />

        <SummaryCard
          title="Low Stock"
          value={lowStock}
        />
      </div>

      <br />

      <h2>Recent Products</h2>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Warehouse</th>
          </tr>
        </thead>

        <tbody>
          {currentUser.products.length > 0 ? (
            currentUser.products.map(
              (product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.quantity}</td>
                  <td>{product.warehouse}</td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan="4">
                No Products Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;