import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" }
});

// GET
export const getProducts = async () => {
  const res = await axiosInstance.get("/products");
  return res.data;
};

// POST
export const postProduct = async (data) => {
  const res = await axiosInstance.post("/products", data);
  return res.data;
};

// PATCH
export const patchProduct = async (id, data) => {
  const res = await axiosInstance.patch(`/products/${id}`, data);
  return res.data;
};