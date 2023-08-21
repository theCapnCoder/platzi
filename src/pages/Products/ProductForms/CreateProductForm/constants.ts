import { object, string, number, array } from "yup";
import { CreateProduct } from "../../../../store/products/actionCreators/createProduct";

export const initialFormValues: CreateProduct = {
  title: "",
  price: 0,
  description: "",
  categoryId: 0,
  images: [...Array(3)].map(() => ""),
};

export const validationSchema = object({
  title: string().required("Title is required"),
  price: number()
    .required("Price is required")
    .min(0, "Price must be greater than or equal to 0"),
  description: string().required("Description is required"),
  categoryId: number().required("Category ID is required"),
  images: array().of(string().url("Invalid URL format")),
});