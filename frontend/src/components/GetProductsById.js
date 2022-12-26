/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";

const getProdById = async (id) => {
  console.log(id);
  const apiURL = `http://localhost:8000/api/v1/products/${id}`;
  console.log("jjjjjjjjjjjjjjjjjjjjjjjj");
  const res = await axios.get(`${apiURL}`);
  console.log(res);
  const { data } = res;
  return data.prodata;
};
const GetProductsById = ({ prodata }) => {
  const [productData, setProductData] = useState(prodata);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchProductData = async () => {
      const data = await getProdById(params?.id);
      setProductData(data);
    };

    fetchProductData();
    setIsLoading(false);
  }, [params]);

  if (isLoading) {
    return <p>Fetching product</p>;
  }

  if (!productData) {
    return <p>No Product found</p>;
  }
  return (
    <>
      <h1>Get Products</h1>
      <div className="img_card">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} className="grid_dard">
            <Grid className="image_style" item xs={4}>
              <img
                className="image"
                src={productData.imageURL}
                height={"200px"}
                width={"200px"}
                alt={"product_img"}
              />
            </Grid>
            <Grid className="card_details">
              <h4>Name: {productData.name}</h4>
              <h5>Category: {productData.category}</h5>
              <h5>Available: {productData.availableItems}</h5>
              <h5>Description: {productData.description}</h5>
              <h5>
                Price:<strong> Rs.{productData.price}</strong>
              </h5>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};
export default GetProductsById;

// import { styled } from '@mui/material/styles';

// export default function BasicGrid() {
//   return (

//   );
// }
