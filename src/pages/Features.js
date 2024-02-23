import { Grid, Typography, Card } from "@mui/material";
import React, { useState } from "react";
import FeatureCard from "../components/FeatureCard";
import BackupImage from "../images/Features/Backups.png";
import DDOSImage from "../images/Features/DDOS Protection.png";
import EdgeNetworkImage from "../images/Features/Edge Network.png";
import SecurityImage from "../images/Features/Security.png";

const Features = ({ layoutStyle }) => {
  const features = [
    {
      title: "EDGE NETWORK",
      subTitle: "Discover our industry leading edge network, with over 300 edge nodes scattered around the globe.\n\n Give your customers the best performance in every corner of the world.",
      imageUrl: EdgeNetworkImage,
    },
    {
      title: "SECURITY",
      subTitle: "Stay safe from threats without slowing down.\n\n SuperNet surrounds and protects your entire ecosystem — clouds, apps, APIs, and users.",
      imageUrl: SecurityImage,
    },
    {
      title: "DDOS PROTECTION",
      subTitle: "Highly rated web, application & network DDoS protection.\n\n Keeping bots and malicious users at bay.",
      imageUrl: DDOSImage,
    },
    {
      title: "BACKUPS",
      subTitle: "Fully managed automatic daily, weekly, and biweekly backups of your Compute Instances.\n\n Have peace of mind knowing that your data is always safe.",
      imageUrl: BackupImage, 
    },
  ];
  const gridItemSize = layoutStyle === "mainPage" ? 6 : 12;
  console.log(layoutStyle, "layoutStyle");
  return (
    <div>
      <Typography
        variant="h4"
        color="white"
        sx={{ textAlign: "center", mb: 3, fontWeight: 'bold' }}
      >
        Features
      </Typography>
      <Grid justifyContent={"center"} container>
        <Grid justifyContent={"center"} item md={6}>
          <Typography
            variant="subtitle1"
            color="white"
            sx={{ textAlign: "center", mb: 7, lineHeight: 1.2 }}
          >
            From edge locations world wide, to unparalleled security and DDOS protection, we’ve got you covered.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={5}
        direction={layoutStyle === "mainPage" ? "row" : "column"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        {features.map((feature, index) => (
          <Grid
            item
            xs={12}
            md={gridItemSize}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: 'stretch',
            }}
          >
            <FeatureCard
              title={feature.title}
              subTitle={feature.subTitle}
              imageUrl={feature.imageUrl}
              reverse={layoutStyle !== "mainPage" && index % 2 !== 0}
              sx={{
                maxWidth: 345, // Set a max width for each card
                width: "100%", // Make sure the card stretches to max width
                height: "100%", // Ensure the card takes full height
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Features;
