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

export default function ProductDetails({ prodata }) {
  const [state, setState] = useState([]);
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
          toast.error("Product Deleted");
          // toast.error("Product Deleted Successfully");
          let data = state.prodata.map((prodata) => prodata._id !== id);
          setState({ prodata: data });
          // setTimeout(() => {}, 3000);
          // navigate(0);
        }
      });
    }
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={prodata.imageURL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prodata.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {prodata.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => getProdById(prodata._id)}>
          More
        </Button>
        {isAdmin() && (
          <>
            <Button size="small" onClick={() => editProductClick(prodata._id)}>
              Edit
            </Button>
            <Button size="small" onClick={() => deleteProduct(prodata._id)}>
              Delete
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}
