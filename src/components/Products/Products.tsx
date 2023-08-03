import { Box, Stack, Typography, Paper, styled } from "@mui/material";
import { Product } from "../../features/products/productsSlice";

type Props = {
  products: Product[];
};

const Products: React.FC<Props> = ({ products }) => {
  return (
    <Box p={2}>
      <Typography variant="h3" mb={3}>
        Products
      </Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        spacing={4}
        useFlexGap
      >
        {products &&
          products.map(({ id, title, price, images, category }) => (
            <Paper key={id} sx={{ p: 2 }}>
              <Stack>
                <Box
                  component={"img"}
                  src={images[0]}
                  sx={{
                    margin: "auto",
                    mb: 1,
                    width: 200,
                    height: 300,
                    objectFit: "cover",
                  }}
                />
                <Typography>{category.name}</Typography>
                <Typography>{title}</Typography>
                <Typography>Price: {price}$</Typography>
              </Stack>
            </Paper>
          ))}
      </Stack>
    </Box>
  );
};

export default Products;
