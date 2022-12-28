/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { getProducts } from "../services/MyData";
import Grid from "@mui/material/Grid";
import ProductDetails from "./ProductDetails";

const Products = () => {
  const [proData, setProData] = useState([]);
  console.log(proData);
  useEffect(() => {
    getProducts()
      .then((res) => {
        if (res.data.err == 0) {
          console.log(res.data);
          setProData(res.data.prodata);
        }
      })
      .catch((err) => {});
  }, []);

  const filterProduct = (deletedId) => {
    let data = proData.filter((prodata) => prodata._id !== deletedId);
    setProData([...data]);
  };

  return (
    <div>
      <h1>Products</h1>
      <Grid container spacing={2}>
        {!proData?.length && <p>load</p>}
        {proData?.map((pro) => (
          <Grid item xs={4} key={pro._id}>
            <ProductDetails
              prodata={pro}
              setProData={setProData}
              filterProduct={filterProduct}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
