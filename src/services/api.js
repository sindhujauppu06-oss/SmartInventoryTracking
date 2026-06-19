const STORAGE_KEYS = {
  PRODUCTS: "products",
  WAREHOUSES: "warehouses",
  SHIPMENTS: "shipments",
};

// Products
export const getProducts = () => {
  return JSON.parse(
    localStorage.getItem(STORAGE_KEYS.PRODUCTS)
  ) || [];
};

export const saveProducts = (products) => {
  localStorage.setItem(
    STORAGE_KEYS.PRODUCTS,
    JSON.stringify(products)
  );
};

// Warehouses
export const getWarehouses = () => {
  return JSON.parse(
    localStorage.getItem(STORAGE_KEYS.WAREHOUSES)
  ) || [];
};

export const saveWarehouses = (warehouses) => {
  localStorage.setItem(
    STORAGE_KEYS.WAREHOUSES,
    JSON.stringify(warehouses)
  );
};

// Shipments
export const getShipments = () => {
  return JSON.parse(
    localStorage.getItem(STORAGE_KEYS.SHIPMENTS)
  ) || [];
};

export const saveShipments = (shipments) => {
  localStorage.setItem(
    STORAGE_KEYS.SHIPMENTS,
    JSON.stringify(shipments)
  );
};