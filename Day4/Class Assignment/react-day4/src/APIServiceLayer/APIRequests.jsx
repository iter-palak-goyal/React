import axios from "axios";

let axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

export let postProduct = async () => {
  let res = await axiosInstance.post("/products", {
    name: "JAVA",
    friend: "JS"
  });

  console.log(res.data);
};

export let patchProduct = async (id) => {
  let res = await axiosInstance.patch(`/products/${id}`, {
    name: "Updated Product"
  });

  console.log(res.data);
};

