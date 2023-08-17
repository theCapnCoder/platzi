import React, { useRef } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import UpdateProductForm from "./ProductForms/UpdateProductForm";
import CreateProductForm from "./ProductForms/CreateProductForm";
import {
  CreateProduct,
  createProductAsync,
} from "../../store/newProducts/actionCreators/createProduct";
import { useAppDispatch } from "../../store/hook";

type Props = {
  open: boolean;
  type: "create" | "update";
  onClose: () => void;
};

type CreateProductFormRef = {
  getFormData: () => CreateProduct;
};

const ProductModal: React.FC<Props> = ({ type, open, onClose }) => {
  const dispatch = useAppDispatch();
  const formRef = useRef<CreateProductFormRef>(null);

  const handleProductAction = () => {
    if (formRef.current) {
      const formData = formRef.current.getFormData();
      content[type].action(formData);
      console.log("Form Data from Child:", formData);
    }
  };

  const content = {
    update: {
      component: <UpdateProductForm />,
      action: (data: any) => dispatch(createProductAsync(data)),
    },
    create: {
      component: <CreateProductForm ref={formRef} />,
      action: (dataForm: CreateProduct) =>
        dispatch(createProductAsync(dataForm)),
    },
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ textTransform: "capitalize" }}>
          {type} Product
        </DialogTitle>
        <DialogContent>{content[type].component}</DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleProductAction} color="primary">
            {type}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductModal;
