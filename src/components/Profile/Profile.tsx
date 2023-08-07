import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../features/hook";
import { useEffect, useState } from "react";
import { updateUser } from "../../features/user/userSlice";
import { redirect, useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};

const Profile = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentUser !== null) {
      dispatch(updateUser({ ...formData, id: currentUser.id }));
    }
  };

  const handleInputChange = (key: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  useEffect(() => {
    if (currentUser !== null) {
      const { name, email, password, avatar } = currentUser;

      setFormData({
        name,
        email,
        password,
        avatar,
      });
    }
  }, [currentUser]);

  return (
    <Box p={2}>
      <Typography>Profile</Typography>
      {!currentUser ? (
        <Typography>Not logged in</Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            fullWidth
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            margin="normal"
          />
          <TextField
            label="Email"
            fullWidth
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            margin="normal"
          />
          <TextField
            label="Avatar URL"
            fullWidth
            value={formData.avatar}
            onChange={(e) => handleInputChange("avatar", e.target.value)}
            margin="normal"
            sx={{ mb: 3 }}
          />

          <Stack spacing={2} direction={"row"}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ minWidth: 100 }}
            >
              Update
            </Button>
            <Button
              onClick={() => navigate(-1)}
              variant="contained"
              color="primary"
              sx={{ minWidth: 100 }}
            >
              Back
            </Button>
          </Stack>
        </form>
      )}
    </Box>
  );
};

export default Profile;
