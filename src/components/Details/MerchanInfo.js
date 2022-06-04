import React from "react";
import Logo from "../../assets/img/logo.png";

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useSelector } from "react-redux";

const MerchanInfo = () => {
  const { user } = useSelector((state) => state.authReducer);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {user.name.charAt(0)}
          </Avatar>
        }
        title={user.name}
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={Logo} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {user.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MerchanInfo;
