import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ActualStat from "./ActualStat";
import MerchanInfo from "./MerchanInfo";
import "./merchantStat.css";

const MerchanStat = () => {
  return (
    <Container>
      <div className="merchant-stat">
        <Grid container spacing={2}>
          <Grid item xs={6} md={4}>
            <MerchanInfo />
          </Grid>
          <Grid item xs={6} md={8}>
            <ActualStat />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default MerchanStat;
