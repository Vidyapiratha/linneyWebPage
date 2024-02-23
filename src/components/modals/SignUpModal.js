import {
  Modal,
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  Snackbar,
  Link,
  Divider,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import Config from "../../config";
import useAuth from "../../hooks/useAuth";
import createUser from "../../dbOperations/createUser";

const textFieldStyle = {
  sx: {
    backgroundColor: Config.colorConfig.mainColor,
    color: "white",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none", // remove border
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      border: "none", // remove border on hover
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none", // remove border when focused
    },
  },
};

const SignUpModal = ({ isOpen, handleClose }) => {
  const { colorConfig } = Config;
  const { signUp } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isSignClicked, setSignUpClicked] = useState(false);
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

  const handleRePasswordChange = useCallback(
    (event) => {
      setRePassword(event.target.value);
    },
    [setRePassword]
  );

  const handleSubmit = useCallback(() => {
    setError(false);
    setSignUpClicked(true);
    if (password !== rePassword) {
      setError(true);
      return;
    }
    signUp(email, password)
      .then(() => {
        setSignUpClicked(false);
        createUser(email, password);
        handleClose();
      })
      .catch((err) => {
        setSignUpClicked(false);
        setError(true);
        console.error("SignUp Error:", err);
      });
  }, [email, password, rePassword, signUp]);

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
              <Divider sx={{ my: 2 }} />
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
              <TextField
                sx={{
                  width: "80%",
                  mb: 2,
                }}
                InputProps={textFieldStyle}
                size={"small"}
                id="re-password"
                placeholder="Retype Password"
                type="password"
                value={rePassword}
                onChange={handleRePasswordChange}
              />
              <Divider sx={{ my: 2 }} />
              <Button
                className="btn"
                sx={{
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "green",
                    "@media (hover: none)": {
                      backgroundColor: "#02B159", // Fix for touch devices
                    },
                  },
                  gap: "8px",
                }}
                onClick={handleSubmit}
              >
                {isSignClicked ? "Signing up..." : "Sign up"}
              </Button>
              <Typography variant="body2" sx={{ pr: 4, pl: 4, pb: 4 }}>
                By providing your email address or using a single sign-on
                provider to create an account, you agree to our Terms of Service
                and that you have reviewed our Privacy Policy and Cookie Policy.{" "}
                <Link
                  href="https://www.linode.com/legal/"
                  underline="none"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#02B159", // Link color
                    "&:hover": {
                      textDecoration: "none", // Remove underline on hover
                      backgroundColor: "rgba(0, 128, 0, 0.1)", // Highlight effect on hover
                    },
                  }}
                >
                  Terms of Service
                </Link>{" "}
                and that you have reviewed our{" "}
                <Link
                  href="https://www.linode.com/legal-privacy/"
                  underline="none"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#02B159", // Link color
                    "&:hover": {
                      textDecoration: "none", // Remove underline on hover
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="https://www.linode.com/legal-cookies/"
                  underline="none"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: "#02B159", // Link color
                    "&:hover": {
                      textDecoration: "none", // Remove underline on hover
                      backgroundColor: "rgba(0, 128, 0, 0.1)", // Highlight effect on hover
                    },
                  }}
                >
                  Cookie Policy
                </Link>
                .
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Modal>
    </div>
  );
};
export default SignUpModal;
