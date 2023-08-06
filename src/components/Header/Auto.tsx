import { Autocomplete, Box, TextField } from "@mui/material";
import React from "react";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { title } from "process";
import { useGetPlayersQuery } from "../../features/api/playersSlice";

type Category = {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
};

const top100Films = [
  { label: "Back to the Future", year: 1985 },
  { label: "Whiplash", year: 2014 },
  // { title: "Gladiator", year: 2000 },
  // { title: "Memento", year: 2000 },
  // 'one', 'two',
];

const Auto = () => {
  // const { data: data = [] } = useGetProductsQuery({ title: "" });
  const {
    data: players = [],
    isLoading,
  } = useGetPlayersQuery("");

  // console.log(data);
  console.log(players);

  return (
    <Box>
      <Box>Auto</Box>
      {isLoading ? (
        <Box>Loading...</Box>
      ) : (
        <Autocomplete
          sx={{ width: 300 }}
          options={players.data}
          getOptionLabel={(player: any) =>
            `${player.first_name} ${player.last_name}`
          }
          isOptionEqualToValue={(player: any, value: any) =>
            player.first_name === value.first_name
          }
          noOptionsText="No players"
          renderInput={(params: any) => (
            <TextField color="secondary" {...params} label="Movie" />
          )}
        />
      )}

      {/* <Autocomplete
        sx={{ width: 300 }}
        // disablePortal
        // options={top100Films}
        options={data.map((option: Product) => ({
          id: option.id,
          title: option.title,
        }))}
        getOptionLabel={(option: Product) => option.title}
        renderInput={(params: any) => (
          <TextField color="secondary" {...params} label="Movie" />
        )}
      /> */}
      {/* <Autocomplete
        sx={{ width: 300 }}
        disablePortal
        options={top100Films}
        renderInput={(params: any) => <TextField {...params} label="Movie" />}
      /> */}
    </Box>
  );
};

export default Auto;
