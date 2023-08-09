import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../features/hook";
import { useParams } from "react-router-dom";

const Category = () => {
  const categories = useAppSelector((state) => state.categories);
  const isLoading = categories.isLoading;
  const { id } = useParams();

  const nameCategory = isLoading
    ? categories.list.find((item) => item.id === Number(id))?.name
    : "";

  return (
    <Box>{isLoading ? <Typography>{nameCategory}</Typography> : null}</Box>
  );
};

export default Category;
