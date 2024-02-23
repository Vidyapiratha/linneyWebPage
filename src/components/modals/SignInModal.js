import {
  Modal,
  Box,
  Card,
  CardContent,
  Button,
  TextField,
  Snackbar,
  Divider,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import Config from "../../config";
import useAuth from "../../hooks/useAuth";

const textFieldStyle = {
  sx: {
    backgroundColor: Config.colorConfig.mainColor,
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
};

const SignInModal = ({ isOpen, handleClose }) => {
  const { colorConfig } = Config;
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignClicked, setSignInClicked] = useState(false);
  const [isError, setError] = useState(false);

  const handleEmailChange = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const handlePasswordChange = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const handleSubmit = useCallback(() => {
    setError(false);
    setSignInClicked(true);

    signIn(email, password)
      .then(() => {
        setSignInClicked(false);
        handleClose();
      })
      .catch((err) => {
        setSignInClicked(false);
        setError(true);
      });
  }, [email, password]);

  return (
    <div>
      {isError && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={isError}
          autoHideDuration={3000}
          message="Something went wrong!"
        />
      )}
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            border: "2px solid #000",
            boxShadow: 24,
          }}
        >
          <Card
            variant="outlined"
            sx={{
              backgroundColor: colorConfig.secondryColor,
              borderRadius: 0,
              boxShadow: 10,
              justifyContent: "center",
            }}
          >
            <CardContent
              className="sign-up-card-content"
              sx={{ textAlign: "center", color: "white", py: 5 }}
            >
              <TextField
                sx={{
                  width: "80%",
                  mb: 3,
                }}
                InputProps={textFieldStyle}
                size={"small"}
                id="email"
                placeholder="Email"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
              <TextField
                sx={{
                  width: "80%",
                  mb: 2,
                }}
                InputProps={textFieldStyle}
                size={"small"}
                id="password"
                placeholder="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              <br />
              <Divider sx={{ my: 2 }} />
              <br />
              <Button
                className="btn"
                sx={{
                  backgroundColor: "#02B159",
                  "&:hover": {
                    backgroundColor: "#02B159",
                    "@media (hover: none)": {
                      backgroundColor: "#02B159", // Fix for touch devices
                    },
                  },
                  gap: "8px",
                }}
                onClick={handleSubmit}
              >
                {isSignClicked ? "Signing in..." : "Login"}
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
};
export default SignInModal;
