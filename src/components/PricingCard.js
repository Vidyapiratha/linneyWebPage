import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Box,
} from "@mui/material";
import BackgroundImage from "../images/Backgrounds/Background Waves.png";

const gradientText = (colorStart, colorEnd) => ({
  background: `linear-gradient(45deg, ${colorStart}, ${colorEnd})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "flex",
  fontWeight: "bold",
  textAlign: "center",
  justifyContent: "center",
});

const PricingCard = ({
  title,
  price,
  space,
  traffic,
  forumAccess,
  support,
  colorStart,
  colorEnd,
}) => (
  <Card
    sx={{
      margin: "20px",
      background: "linear-gradient(to top, #242424, #313131)",
      justifyContent: "space-between",
      display: "block",
      boxShadow: 10,
      width: "100%",
      height: "100%",
      flexDirection: "column",
    }}
  >
    <Box
      sx={{
        color: "white",
        textAlign: "center",
        margin: "1rem",
      }}
    >
      <Typography variant="h5" sx={gradientText(colorStart, colorEnd)}>
        {title}
      </Typography>
      <Typography variant="h4" sx={gradientText(colorStart, colorEnd)}>
        {price}
      </Typography>
    </Box>
    <CardMedia
      component="img"
      sx={{ height: "140px", objectFit: "cover" }}
      image={BackgroundImage}
      alt="mountains"
    />
     <Box
      sx={{
        color: "white",
        textAlign: "center",
        margin: "1rem",
        justifyContent: "flex-end",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
    <CardContent
      sx={{
        padding: "10px",
        textAlign: "center",
        color: "white",
        '&:last-child': {
            paddingBottom: "1rem", // Override MUI's CardContent padding
          },
      }}
    >
      <Typography sx={{ mt: 'auto' }}>{space} GB of space</Typography>
      <Typography sx={{ mt: 'auto' }}>{traffic} Traffic</Typography>
      <Typography sx={{ mt: 'auto' }}>{forumAccess ? "Forum Access" : ""}</Typography>
      <Typography sx={{ mt: 'auto' }}>{support}</Typography>
    </CardContent>
    </Box>
  </Card>
);

export default PricingCard;
