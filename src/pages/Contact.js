import {
  Container,
  Button,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";

const Contact = () => {
  const [open, setOpen] = useState(false); // State to control the dialog visibility

  const handleClickOpen = () => {
    setOpen(true); // Function to open the dialog
  };

  const handleClose = () => {
    setOpen(false); // Function to close the dialog
  };
  const handleContactSalesClick = () => {
    const email = "sales@linney.com";
    const subject = encodeURIComponent("Inquiry from Website");
    const mailtoUrl = `mailto:${email}?subject=${subject}`;
    window.location.href = mailtoUrl;
  };
  return (
    <Container maxWidth="md" component="footer" color="#313131">
      <Grid container spacing={4} justifyContent="space-between">
        <Grid item xs={12} sx={{ textAlign: "center", marginTop: "20px", marginBottom: "50px" }}>
          <Typography
            variant="h4"
            color="white"
            sx={{ textAlign: "center", mb: 3, fontWeight: "bold" }}
          >
            Ready to get started or have questions?
          </Typography>
          <Grid justifyContent={"center"} container>
        <Grid justifyContent={"center"} item md={6}>
          <Typography
            gutterBottom
            variant="subtitle1"
            color="#DFDFDF"
            sx={{ textAlign: "center", mb: 5, lineHeight: 1.2 }}
          >
            Set up your free account today or contact a sales consultant to learn more.
          </Typography>
        </Grid>
      </Grid>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            style={{ marginTop: "10px" }}
          >
            <Grid item>
              <Button
                variant="contained"
                sx={{
                    bgcolor: "#02B159",
                    '&:hover': {
                      bgcolor: "#02B159", // Keeps the background color the same on hover
                      '@media (hover: none)': {
                        bgcolor: "#02B159", // Fix for touch devices
                      },
                    },
                  }}
                onClick={handleClickOpen}
              >
                Create Account
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                onClick={handleContactSalesClick}
                sx={{
                    color: "#FEFEFE",
                  borderColor: "#DFDFDF",
                  '&:hover': {
                    borderColor: "#DFDFDF", // Keeps the border color the same on hover
                    color: "#DFDFDF", // Keeps text color the same on hover
                    '@media (hover: none)': {
                      color: "#DFDFDF", // Fix for touch devices
                    },
                  },
                  borderWidth: "0.5px",
                }}
              >
                Contact Sales
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Dialog for the Contact Form */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ backgroundColor: "#313131", color: "#DFDFDF" }}>Create Account</DialogTitle>
        <DialogContent sx={{ backgroundColor: "#313131" }}>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            InputLabelProps={{
                style: { color: '#DFDFDF' }, // Changes the color of the input label
              }}
              InputProps={{
                style: { color: '#DFDFDF' }, // Changes the color of the input text
              }}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            InputLabelProps={{
                style: { color: '#DFDFDF' }, // Changes the color of the input label
              }}
              InputProps={{
                style: { color: '#DFDFDF' }, // Changes the color of the input text
              }}
          />
          {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions sx={{ backgroundColor: "#313131" }}>
          <Button onClick={handleClose} sx={{ color: "#FEFEFE" }}>Cancel</Button>
          <Button onClick={handleClose} sx={{ color: "#FEFEFE" }}>Submit</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Contact;
