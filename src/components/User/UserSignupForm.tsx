import React, { useState } from "react";
import { Button, Box, TextField, Typography, Modal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../features/hook";
import { createUser } from "../../features/user/userSlice";

type FormData = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};

type Props = {
  onClose: () => void;
};

const UserSignupForm: React.FC<Props> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const [disabled, setDisabled] = useState(true);
  const { showForm } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const handleInputChange = (key: keyof FormData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));

    const isNotEmpty = Object.values(formData).some((val) => val === "");

    if (!isNotEmpty) {
      setDisabled(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(createUser(formData));
    onClose();
  };

  const hanldeClose = () => {
    setFormData({
      name: "",
      email: "",
      password: "",
      avatar: "",
    });
    onClose();
  };

  return (
    <Modal open={showForm} onClose={hanldeClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5">Sign Up</Typography>
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
          />
          <Button
            type="submit"
            variant="contained"
            disabled={disabled}
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default UserSignupForm;
