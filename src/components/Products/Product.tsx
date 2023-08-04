import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

const Product = () => {
  const product = {
    id: 14,
    title: "Licensed Metal Ball",
    price: 328,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    images: [
      "https://picsum.photos/640/640?r=7734",
      "https://picsum.photos/640/640?r=2181",
      "https://picsum.photos/640/640?r=1231",
    ],
    creationAt: "2023-08-03T12:57:25.000Z",
    updatedAt: "2023-08-03T12:57:25.000Z",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://picsum.photos/640/640?r=6454",
      creationAt: "2023-08-03T12:57:25.000Z",
      updatedAt: "2023-08-03T12:57:25.000Z",
    },
  };

  const [currentImage, setCurrentImage] = React.useState(0);

  return (
    <Stack direction={"row"} spacing={3}>
      <Box
        component={"img"}
        src={product.images[currentImage]}
        sx={{ width: "40%", objectFit: "cover" }}
      />

      <Stack spacing={2}>
        {product.images.map((image, idx) => (
          <Box
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
        <Typography variant="h4">{product.title}</Typography>
        <Typography variant="h5">{product.price}$</Typography>
        <Typography variant="h6">Color: Green</Typography>
        <Typography>Category: {product.description}</Typography>

        <Stack direction={"row"} spacing={2}>
          <Button variant="contained">Add to cart</Button>
          <Button variant="contained" color="warning">Add to favourites</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Product;
