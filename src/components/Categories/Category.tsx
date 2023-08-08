import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../features/hook";
import { useParams } from "react-router-dom";

const Category = () => {
  const { categories } = useAppSelector((state) => state);
  const { isLoading } = useAppSelector((state) => state.categories);
  const { id } = useParams();

  const nameCategory = isLoading
    ? categories.list.find((item) => item.id === Number(id))?.name
    : "";


  return (
    <Box>
      {isLoading ? (
        // <Box>{categories.list.find((id) => id.id === +id)}</Box>
        <Typography>
          <div>
            {/* <pre>{JSON.stringify(categories.list, null, 2)}</pre> */}
            {/* <Typography>
              <ul>
                {categories.list.find((item) => {
                  return <li>{item.name}</li>;
                })}
              </ul>
            </Typography> */}

            <Typography>{nameCategory}</Typography>
          </div>
        </Typography>
      ) : null}
    </Box>
  );
};

export default Category;
