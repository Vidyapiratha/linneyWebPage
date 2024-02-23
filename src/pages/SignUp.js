import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  Link,
  Divider
} from "@mui/material";
import React, { useState } from "react";
import Config from "../config";
import { GithubOutlined, GoogleOutlined } from "@ant-design/icons";
import "../App.css";
import { EmailOutlined } from "@mui/icons-material";
import SignUpModal from "../components/modals/SignUpModal";
import SignInModal from "../components/modals/SignInModal";
import useAuth from "../hooks/useAuth";

const SignUp = () => {
  const [isSignUpEmailClicked, setIsSignUpEmailClicked] = useState(false);
  const [isSignInEmailClicked, setIsSignInEmailClicked] = useState(false);
  const { colorConfig } = Config;

  const signUpWithEmail = () => {
    setIsSignUpEmailClicked(true);
  };

  const closeSignUpWithEmail = () => {
    setIsSignUpEmailClicked(false);
  };

  const signInWithEmail = () => {
    setIsSignInEmailClicked(true);
  };

  const closeSignInWithEmail = () => {
    setIsSignInEmailClicked(false);
  };
  const { signInWithGoogle, signInWithGithub } = useAuth();

  return (
    <div>
      {isSignUpEmailClicked && (
        <SignUpModal
          isOpen={isSignUpEmailClicked}
          handleClose={closeSignUpWithEmail}
        />
      )}

      {isSignInEmailClicked && (
        <SignInModal
          isOpen={isSignInEmailClicked}
          handleClose={closeSignInWithEmail}
        />
      )}
      <Box sx={{ flexGrow: 1, height: "100vh" }}>
      <Grid
        className="content"
        container
        direction="row"
        justifyItems={"center"}
        justifyContent={"center"}
        p={5}
        spacing={4}
      >
        <Grid color={"white"} item md={4} xs={12}>
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
              <Button
                onClick={() =>
                  signInWithGoogle()
                    .then((userCredential) => {
                      // Handle successful sign in
                      console.log(userCredential.user);
                      // You might want to close the modal and redirect the user
                    })
                    .catch((error) => {
                      console.error(error);
                      // Handle errors, such as showing a notification
                    })
                }
                className="btn"
                sx={{
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "green",
                    '@media (hover: none)': {
                      backgroundColor: "green", // Fix for touch devices
                    },
                  },
                  gap: "8px",
                }}
              >
                <GoogleOutlined style={{ fontSize: "20px" }} /> Sign up with
                Google
              </Button>
              <Divider sx={{ my: 2 }} />
              <br />
              <Button
                onClick={() =>
                  signInWithGithub()
                    .then((userCredential) => {
                      console.log(userCredential.user);
                    })
                    .catch((error) => {
                      console.error(error);
                    })
                }
                className="btn"
                sx={{
                  backgroundColor: colorConfig.mainColor,
                  "&:hover": {
                    backgroundColor: colorConfig.mainColor,
                    '@media (hover: none)': {
                      backgroundColor: colorConfig.mainColor, // Fix for touch devices
                    },
                  },
                  gap: "8px",
                }}
              >
                <GithubOutlined style={{ fontSize: "20px" }}></GithubOutlined>{" "}
                Github
              </Button>
              <Button
                onClick={signUpWithEmail}
                className="btn"
                sx={{
                  backgroundColor: colorConfig.mainColor,
                  "&:hover": {
                    backgroundColor: colorConfig.mainColor,
                    '@media (hover: none)': {
                      backgroundColor: colorConfig.mainColor, // Fix for touch devices
                    },
                  },
                  gap: "8px",
                }}
              >
                <EmailOutlined style={{ fontSize: "20px" }}></EmailOutlined>{" "}
                Email
              </Button>
              <br />
              <Divider sx={{ my: 2 }} />
              <Button
                onClick={signInWithEmail}
                className="btn"
                sx={{
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "green",
                    '@media (hover: none)': {
                      backgroundColor: "green", // Fix for touch devices
                    },
                  },
                  gap: "8px",
                  fontSize: "20px"
                }}
              > Login
              </Button>
              <br />
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
        </Grid>
      </Grid>
      </Box>
    </div>
  );
};

export default SignUp;
