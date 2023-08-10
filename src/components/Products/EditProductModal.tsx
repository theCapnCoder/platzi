import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import UpdateProductForm from "./UpdateProductForm";

type Props = {
  open: boolean;
  onClose: () => void;
};

const EditProductModal: React.FC<Props> = ({ open, onClose }) => {
  const initialValues = {
    title: "",
    price: "",
    description: "",
    categoryId: "",
    images: [],
  };

  const updateProduct = () => {};

  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <UpdateProductForm initialValues={initialValues} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={updateProduct} color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditProductModal;
