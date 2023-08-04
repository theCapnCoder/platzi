import { Box, Stack, Typography, Paper, styled, Link } from "@mui/material";
import { Product } from "../../features/products/productsSlice";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  products: Product[];
  amount: number;
};

const Products: React.FC<Props> = ({ title, products, amount }) => {
  const list = products.slice(0, amount);
  const navigate = useNavigate();

  const goToPage = (id: number) => {
    navigate(`/platzi/products/${id}`);
  };

  return (
    <Box p={2}>
      <Typography variant="h3" mb={3} sx={{ textAlign: "center" }}>
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
            <Paper
              onClick={() => goToPage(id)}
              key={id}
              sx={{ p: 2, maxWidth: "15%", cursor: "pointer" }}
            >
              <Box
                sx={{
                  maxWidth: 200,
                  maxHeight: 300,
                  mb: 1,
                }}
              >
                <Box
                  component={"img"}
                  src={images[0]}
                  sx={{
                    width: "100%",
                    height: "100%",
                    margin: "auto",
                    objectFit: "cover",
                  }}
                />
                <Typography>{category.name}</Typography>
                <Typography>{title}</Typography>
                <Typography>Price: {price}$</Typography>
              </Box>
            </Paper>
          ))}
      </Stack>
    </Box>
  );
};

export default Products;
