import React, { useState } from "react";
import {
  Modal,
  ModalDialog,
  ModalClose,
  Typography,
  Input,
  FormLabel,
  Button,
} from "@mui/joy";
import { useNavigate } from "react-router-dom";

const AdminLogin = ({ triggerDialog, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "test" && password === "test") {
      alert("Login successful.");
      navigate("/admin-form");
      onClose();
    } else {
      alert("This page is for admins only.");
    }
  };

  return (
    <Modal open={triggerDialog} onClose={onClose}>
      <ModalDialog color="neutral" layout="center" variant="soft">
        <ModalClose />
        <Typography
          variant="h6"
          component="h2"
          className="uppercase font-semibold"
          textAlign="center"
          marginBottom={2}
        >
          Admin Login
        </Typography>

        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          margin="normal"
        />

        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />

        <Button
          onClick={handleLogin}
          variant="solid"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>
      </ModalDialog>
    </Modal>
  );
};

export default AdminLogin;
