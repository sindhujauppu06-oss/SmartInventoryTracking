import { useState, useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Shipments() {
  const {
    currentUser,
    addShipment,
    deleteShipment,
  } = useContext(InventoryContext);

  if (!currentUser) {
    return <h2>Please Login</h2>;
  }

  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] =
    useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    addShipment({
      id: Date.now(),
      product,
      quantity,
      status,
    });

    setProduct("");
    setQuantity("");
    setStatus("Pending");
  };

  return (
    <div>
      <h1>Shipments</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option>Pending</option>
          <option>In Transit</option>
          <option>Delivered</option>
        </select>

        <button type="submit">
          Save Shipment
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentUser.shipments.map(
            (shipment) => (
              <tr key={shipment.id}>
                <td>{shipment.product}</td>
                <td>{shipment.quantity}</td>
                <td>{shipment.status}</td>

                <td>
                  <button
                    onClick={() =>
                      deleteShipment(
                        shipment.id
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

export default Shipments;