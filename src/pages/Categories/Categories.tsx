import { Box, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  name: string;
  image: string;
};

type Props = {
  products: Product[];
  amount: number;
};

const Categories: React.FC<Props> = ({ products, amount }) => {
  const list = products.slice(0, amount);

  return (
    <Box sx={{ py: 4, px: 2 }}>
      <Typography variant="h3" sx={{ mb: 3, textAlign: "center" }}>
        Categories
      </Typography>

      <Stack direction={"row"} justifyContent={"space-between"} spacing={2}>
        {list.map(({ id, name, image }) => (
          <Paper key={id} sx={{ p: 2 }}>
            <Link to={`platzi/categories/${id}`}>
              <Box
                component={"img"}
                src={image}
                sx={{
                  margin: "auto",
                  mb: 1,
                  width: 200,
                  height: 300,
                  objectFit: "cover",
                }}
              />
            </Link>
            <Typography>{name}</Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default Categories;
