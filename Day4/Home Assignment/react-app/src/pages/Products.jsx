import React, { Fragment, useEffect, useState } from "react";
import { getProducts, postProduct, patchProduct } from "../APIServiceLayer/APIRequests";

const Products = () => {
  const [products, setProducts] = useState([]);

  // GET PRODUCTS
  useEffect(() => {
    (async () => {
      const res = await getProducts();
      setProducts(res);
    })();
  }, []);

  // POST PRODUCT
  const addProduct = async () => {
    const newProduct = await postProduct({
      name: "Headphones",
      price: 3000
    });

    setProducts(prev => [...prev, newProduct]);
  };

  // PATCH PRODUCT
  const updateProduct = async () => {
    const updated = await patchProduct(1, { price: 99999 });

    setProducts(prev =>
      prev.map(p => (p.id === updated.id ? updated : p))
    );
  };

  return (
    <div>
      <h1>Products Page</h1>

      <button onClick={addProduct}>Add Product</button>
      <button onClick={updateProduct}>Update Product 1</button>

      {products.map(v => (
        <Fragment key={v.id}>
          <h2>{v.name} — ₹{v.price}</h2>
        </Fragment>
      ))}
    </div>
  );
};

export default Products;