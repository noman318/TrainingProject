/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { getProducts } from "../services/MyData";
import Grid from "@mui/material/Grid";
import ProductDetails from "./ProductDetails";

const Products = () => {
  const [proData, setProData] = useState([]);
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

  return (
    <div>
      <h1>Products</h1>
      <Grid container spacing={2}>
        {proData?.map(pro => 
          <Grid item xs={4} key={pro._id}>
            <ProductDetails prodata={pro} />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Products;
