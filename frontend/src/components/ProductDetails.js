import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { isAdmin, deleteProducts } from "../services/MyData";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductDetails({ prodata, filterProduct }) {
  const navigate = useNavigate();

  const editProductClick = (_id) => {
    navigate(`/editproducts/${prodata._id}`);
  };

  const getProdById = (id) => {
    console.log("getbyId");
    navigate(`/products/${id}`);
  };

  const deleteProduct = (id) => {
    console.log("delete Products");
    if (window.confirm("Do you want to delete ?")) {
      deleteProducts(id).then((res) => {
        if (res.data) {
          console.log("res.data", res.data);
          toast.error("Product Deleted");
          filterProduct(id);
        }
      });
    }
  };
  return (
    <Card className="card_main" sx={{ maxWidth: 345 }}>
      <CardMedia
        className="card_img"
        sx={{ height: 140 }}
        image={prodata.imageURL}
        title="Producs"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Name: {prodata.name}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Price: {prodata.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={() => getProdById(prodata._id)}>
          More
        </Button>
        <Button size="large" onClick={() => getProdById(prodata._id)}>
          Add To Cart
        </Button>
        {isAdmin() && (
          <>
            <Button size="large" onClick={() => editProductClick(prodata._id)}>
              Edit
            </Button>
            <Button size="large" onClick={() => deleteProduct(prodata._id)}>
              Delete
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}
