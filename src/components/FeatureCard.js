import * as React from "react";
import {Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Config from "../config";
const FeatureCard = ({ imageUrl, title, subTitle, reverse }) => {
  const renderSubTitle = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        boxShadow: 10,
        backgroundColor: Config.colorConfig.secondryColor,
        width: "50%",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography variant="h6" color="white" component="div">
            {title}
          </Typography>
          <Typography
            variant="caption"
            color="white"
            component="div"
          >
            {renderSubTitle(subTitle)}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{
          width: "50%",
          border: "none",
          // height: "auto",
          objectFit: 'cover',
          position: "static",
          order: reverse ? 2 : 1,
        }}
        image={imageUrl}
        alt="Feature image"
      />
    </Card>
  );
};

export default FeatureCard;
