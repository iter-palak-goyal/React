//npm i axios json-server
//to install the axios and the JSON-SERVER son the local project

//npx json-server --watch ./src/backend/db.json --port 3000
//to runthe JSON server on the given port and watch for the changes

//how to create the endpoints for the json server
// {"endpointname":[array for the objects]}

import axios from "axios";
let axiosInstance = axios.create({
    baseURL:"http://localhost:3000/",
    timeout:5000,
    headers:{'Content-Type':'application/json'}
})

export let postProduct = async(data)=>{
    let res = await axiosInstance.post("/products",data);
    console.log(res);
  console.log(res.data);
}

export let patchProduct = async(data)=>{
    let res = await axiosInstance.patch(`/products/${data.id}`,data)
    console.log(res);
}

export let getProducts = async()=>{
    let resa = await axiosInstance.get("/products")
    return resa.data;
}

export let deleteProduct = async(id)=>{
    let res = await axiosInstance.delete(`/products/${id}`)
    console.log(res);
    return res.data;

}

export let getOneProduct = async(id)=>{
    let res = await axiosInstance.get(`/products/${id}`)
    console.log(res);

}