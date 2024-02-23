import { Grid, Typography, Link } from "@mui/material";
import React, { useState } from "react";
import EdgeNetworkMapImage from "../images/EdgeNetwork/Edge Network Map.png";

const EdgeNetWork = () => {
  return (
    <div>
      <Typography
        variant="h4"
        color="#DFDFDF"
        sx={{ textAlign: "center", mb: 3, fontWeight: 'bold' }}
      >
        Edge Network
      </Typography>
      <Grid justifyContent={"center"} container>
        <Grid justifyContent={"center"} item md={6}>
          <Typography
            gutterBottom
            variant="subtitle1"
            color="#DFDFDF"
            sx={{ textAlign: "center", mb: 5, lineHeight: 1.2 }}
          >
            Scale your business on the most distributed compute, security, and
            delivery platform — from cloud to edge. New core compute regions
            launched. {" "}
                <Link
                  href="https://www.akamai.com/newsroom/press-release/akamai-expands-world-s-most-distributed-cloud-network-with-new-c"
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
                  Learn more 
                </Link>{" "}.
          </Typography>
        </Grid>
      </Grid>
      <img
        src={EdgeNetworkMapImage}
        alt="Edge Network Map"
        style={{ width: "100%", height: "auto", maxWidth: "100%" }}
      />
    </div>
  );
};

export default EdgeNetWork;
