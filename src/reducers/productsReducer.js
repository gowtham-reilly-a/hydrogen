const initialState = {
  "119a6a0f-35d8-4b4f-a1d4-48a78d2f545d": {
    id: "119a6a0f-35d8-4b4f-a1d4-48a78d2f545d",
    name: "Yippee",
    brand: "Sunfeast",
    supplier: "Sree Ganga Foods",
    price: "20",
    barcode: "78634789543",
    sku: "SKU-SK-1",
    stock: 2,
  },
  "f20ea0b2-f9d3-4022-9da8-120dacd839c4": {
    id: "f20ea0b2-f9d3-4022-9da8-120dacd839c4",
    name: "Macbook Pro",
    brand: "Apple",
    supplier: "iPlanet",
    price: "80000",
    barcode: "7862879346372",
    sku: "SKU-AP-2",
    stock: 12,
  },
  "e20ea0b2-f9d3-4022-9da8-120dacd839c5": {
    id: "e20ea0b2-f9d3-4022-9da8-120dacd839c5",
    name: "Thinkpad Laptop",
    brand: "Lenovo",
    supplier: "Angel Enterprises",
    price: "16161",
    barcode: "786287933726",
    sku: "SKU-LT-2",
    stock: 32,
  },
  "g20ea0b2-f9d3-4022-9da8-120dacd839c6": {
    id: "g20ea0b2-f9d3-4022-9da8-120dacd839c6",
    name: "Classmate Notebook",
    brand: "Classmate",
    supplier: "TNPL",
    price: "50",
    barcode: "286287964346372",
    sku: "SKU-CM-2",
    stock: 105,
  },
  "c20ea0b2-f9d3-4022-9da8-120dacd839c2": {
    id: "c20ea0b2-f9d3-4022-9da8-120dacd839c2",
    name: "LG TV 13 inches",
    brand: "LG",
    supplier: "A1 Electronics",
    price: "12999",
    barcode: "7862871346371",
    sku: "SKU-LG-2",
    stock: 7,
  },
  "b20ea0b2-f9d3-4022-9da8-120dacd839c6": {
    id: "b20ea0b2-f9d3-4022-9da8-120dacd839c6",
    name: "Table Mate",
    brand: "Tablemate",
    supplier: "Mumbai Furnitures",
    price: "1888",
    barcode: "78346873242",
    sku: "SKU-TM-2",
    stock: 29,
  },
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      return { [action.payload.id]: action.payload, ...state };
    case "UPDATE_PRODUCT":
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
