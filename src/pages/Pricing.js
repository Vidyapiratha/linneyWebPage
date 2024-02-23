import React from "react";
import { Grid } from "@mui/material";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  const pricings = [
    {
      title: "Standard",
      price: "$9/mo",
      space: "10",
      traffic: "Unlimited",
      forumAccess: true,
      support: "Support at $25/hour",
      colorStart: "#FF9B9B",
      colorEnd: "#FB3434",
    },
    {
      title: "Professional",
      price: "$49/mo",
      space: "30",
      traffic: "Unlimited",
      forumAccess: true,
      support: "Support at $5/hour",
      colorStart: "#ACFFAF",
      colorEnd: "#43FE4A",
    },
    {
      title: "Enterprise",
      price: "$159/mo",
      space: "50",
      traffic: "Unlimited",
      forumAccess: true,
      support: "Free Support",
      colorStart: "#ACCCFC",
      colorEnd: "#5F9FFF",
    },
  ];
  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      sx={{
        width: '100vw',
        maxWidth: '100vw',
        overflowX: 'hidden',
        padding: '0 16px',
        boxSizing: 'border-box',
        marginRight: "25px",
        padding: "15px"
      }}
    >
      {pricings.map((pricing, index) => (
        <Grid
          item
          xs={12} sm={6} md={4}
          key={index}
          direction={"column"}
          justifyContent={"center"}
          alignContent={"center"}
          height= {'100%'}
        >
          <PricingCard
            title={pricing.title}
            price={pricing.price}
            space={pricing.space}
            traffic={pricing.traffic}
            forumAccess={pricing.forumAccess}
            support={pricing.support}
            colorStart={pricing.colorStart}
            colorEnd={pricing.colorEnd}
            sx={{
                maxWidth: 345, // Set a max width for each card
                width: "100%", // Make sure the card stretches to max width
                height: "100%", // Ensure the card takes full height
                
              }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Pricing;
