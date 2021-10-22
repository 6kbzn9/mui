import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BluetoothConnectedRoundedIcon from "@mui/icons-material/BluetoothConnectedRounded";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

const Buttons = () => {
  const MyButton = styled(Button)({
    background: "transparent",
    border: "1px solid",
    borderRadius: 5,
    boxShadow: "0 2px 4px rgba(255, 105, 135, .2)",
    color: "#FE6B8B",
    padding: ".425rem 1.5rem",
  });

  const useStyles = makeStyles({
    custom: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 5,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      padding: ".425rem 1.5rem",
    },
  });

  const classes = useStyles();
  return (
    <Box
      sx={{
        padding: "2rem 0",
      }}
    >
      <Typography
        color="primary"
        align="center"
        gutterBottom
        variant="h4"
        component="h2"
      >
        Buttons
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mb={2}
      >
        <Button variant="text" color="secondary">
          Text
        </Button>
        <Button variant="contained" color="error">
          Contained
        </Button>
        <Button variant="outlined" color="success">
          Outlined
        </Button>
        <IconButton color="primary">
          <BluetoothConnectedRoundedIcon />
        </IconButton>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="outlined"
          color="secondary"
          endIcon={<BluetoothConnectedRoundedIcon />}
        >
          end icon
        </Button>
        <Button className={classes.custom}>Custom 1</Button>
        <MyButton endIcon={<BluetoothConnectedRoundedIcon />}>
          Custom 2
        </MyButton>
      </Stack>
    </Box>
  );
};

export default Buttons;
