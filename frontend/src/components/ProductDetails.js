import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { isAdmin } from "../services/MyData";

export default function ProductDetails({ prodata }) {
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
        <Button size="small">More</Button>
        {isAdmin() && (
          <>
            <Button size="small">Edit</Button>
            <Button size="small">Delete</Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}
