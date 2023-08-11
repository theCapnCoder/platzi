import { deleteProductAsync } from "../../store/newProducts/actionCreators/deleteProduct";
import { useAppDispatch } from "../../store/hook";
import { Box } from "@mui/material";

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
