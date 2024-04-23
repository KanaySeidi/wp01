import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../api/products";
import { Link, useParams } from "react-router-dom";

export default function ProductCard() {
  const params = useParams();
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      {products.map((product) => (
        <Card style={{ marginTop: 50 }} key={product.id} sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 240, width: 300 }} image={product.image} />
          <hr />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Brand: {product.brand}
              <br />
              Price: {product.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained">
              В Корзину
            </Button>
            <Link to={`/detail/${product.id}`}>
              <Button size="small" variant="contained">
                Подробнее
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
