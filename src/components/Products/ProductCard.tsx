import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import EditProductModal from "./EditProductModal";

type Props = {
  item: {
    title: string;
    price: number;
    images: string[];
    description: string;
  };
};

const ProductCard: React.FC<Props> = ({ item }) => {
  const { title, price, images, description } = item;

  const [currentImage, setCurrentImage] = useState(0);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addToCart = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <Stack direction={"row"} spacing={3}>
      <Box
        component={"img"}
        src={images[currentImage]}
        sx={{ width: "40%", objectFit: "cover" }}
      />

      <Stack spacing={2}>
        {images.map((image, idx) => (
          <Box
            key={idx}
            onClick={() => {
              setCurrentImage(idx);
            }}
            sx={{
              maxWidth: 200,
              maxHeight: 200,
            }}
          >
            <Box
              key={idx}
              component={"img"}
              src={image}
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        ))}
      </Stack>

      <Stack spacing={1}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{price}$</Typography>
        <Typography variant="h6">Color: Green</Typography>
        <Typography>Category: {description}</Typography>

        <Stack direction={"row"} spacing={2}>
          <Button onClick={addToCart} variant="contained" color="info">
            Add to cart
          </Button>
          <Button variant="contained" color="info">
            Add to favourites
          </Button>
        </Stack>
        <Button onClick={handleOpen} variant="contained" color="error">
          Update
        </Button>
        <Button onClick={() => navigate(-1)} variant="contained">
          Back
        </Button>
      </Stack>

      <EditProductModal open={open} onClose={handleClose} />
    </Stack>
  );
};

export default ProductCard;
