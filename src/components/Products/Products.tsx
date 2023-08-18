import { Box, Stack, Typography, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Product } from "../../store/products/types";
import DeleteProduct from "./ProductForms/DeleteProduct/DeleteProduct";
import ProductModal from "./ProductModal";
import { useState } from "react";
import CreateProductForm from "./ProductForms/CreateProductForm/CreateProductForm";

type Props = {
  title: string;
  products: Product[];
  amount: number;
};

const Products: React.FC<Props> = ({ title, products, amount }) => {
  const [createOpenModal, setCreateOpenModal] = useState(false);

  const list = products.slice(0, amount);
  const navigate = useNavigate();

  const goToPage = (id: number) => {
    navigate(`/platzi/products/${id}`);
  };

  const handleOpen = () => {
    setCreateOpenModal(true);
  };

  const handleClose = () => {
    setCreateOpenModal(false);
  };

  return (
    <Box p={2}>
      <Typography variant="h3" mb={3} sx={{ textAlign: "center" }}>
        {title}
      </Typography>

      <Button onClick={handleOpen} variant="contained">
        Create
      </Button>
      <CreateProductForm open={createOpenModal} onClose={handleClose} />
      {/* <ProductModal
        type="create"
        open={createOpenModal}
        onClose={handleClose}
      /> */}

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        spacing={4}
        useFlexGap
      >
        {list &&
          list.map(({ id, title, price, images, category }) => (
            <Paper key={id} sx={{ p: 2, maxWidth: "100%", cursor: "pointer" }}>
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
                <Stack direction={"row"} spacing={1} alignItems={"center"}>
                  <Typography>ID: {id}</Typography>
                  <Button
                    variant="contained"
                    onClick={() => goToPage(id)}
                    color="secondary"
                    size="small"
                  >
                    Show
                  </Button>
                  <DeleteProduct productId={id}>
                    <Button variant="contained" size="small">
                      Delete
                    </Button>
                  </DeleteProduct>
                </Stack>
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
