import { Box, Stack, Typography, Paper, styled } from "@mui/material";
import { Product } from "../../features/products/productsSlice";

type Props = {
  title: string;
  products: Product[];
  amount: number;
};

const Products: React.FC<Props> = ({ title, products, amount }) => {
  const list = products.slice(0, amount);

  return (
    <Box p={2}>
      <Typography variant="h3" mb={3}>
        {title}
      </Typography>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        spacing={4}
        useFlexGap
      >
        {list &&
          list.map(({ id, title, price, images, category }) => (
            <Paper key={id} sx={{ p: 2, maxWidth: "15%" }}>
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
