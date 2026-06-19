import { useState, useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

function Inventory() {
  const {
    currentUser,
    addProduct,
    deleteProduct,
  } = useContext(InventoryContext);

  if (!currentUser) {
    return <h2>Please Login</h2>;
  }

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct({
      id: Date.now(),
      name: productName,
      category,
      quantity: Number(quantity),
      warehouse,
    });

    setProductName("");
    setCategory("");
    setQuantity("");
    setWarehouse("");
  };

  return (
    <div>
      <h1>Inventory</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Warehouse"
          value={warehouse}
          onChange={(e) => setWarehouse(e.target.value)}
          required
        />

        <button type="submit">
          Save Product
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Warehouse</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {currentUser.products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.quantity}</td>
              <td>{product.warehouse}</td>

              <td>
                <button
                  onClick={() =>
                    deleteProduct(product.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;