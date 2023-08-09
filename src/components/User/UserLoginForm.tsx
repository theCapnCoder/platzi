import React, { useState } from "react";
import { Button, Box, TextField, Typography, Modal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../features/hook";
import { loginUser } from "../../features/user/userSlice";

type FormData = {
  email: string;
  password: string;
};

type Props = {
  onClose: () => void;
};

const UserLoginForm: React.FC<Props> = ({ onClose }) => {
  const initFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState<FormData>(initFormData);

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

    setFormData(initFormData);
    dispatch(loginUser(formData));
    onClose();
  };

  const hanldeClose = () => {
    setFormData(initFormData);
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
          <Button
            type="submit"
            variant="contained"
            disabled={disabled}
            color="primary"
          >
            Login
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default UserLoginForm;
