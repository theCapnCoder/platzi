import { Box } from "@mui/material";
import { useAppDispatch } from "../../../../store/hook";
import { deleteProductAsync } from "../../../../store/products/actionCreators/deleteProduct";

type Props = {
  productId: number;
  children: React.ReactNode;
};

const DeleteProduct: React.FC<Props> = ({ productId, children }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteProductAsync(productId));
  };

  return (
    <Box onClick={handleDelete} sx={{ cursor: "pointer" }}>
      {children}
    </Box>
  );
};

export default DeleteProduct;
