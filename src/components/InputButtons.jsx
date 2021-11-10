import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TwitterIcon from "@mui/icons-material/Twitter";

const InputButtons = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Box>
      <Typography
        color="secondary"
        align="center"
        gutterBottom
        variant="h4"
        component="h2"
      >
        Input Buttons
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mb={2}
        sx={{ flexWrap: "wrap" }}
      >
        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...label} />}
            label="primary"
            sx={{ color: "primary.main" }}
          />
          <FormControlLabel
            control={<Checkbox {...label} color="secondary" />}
            label="secondary"
            sx={{ color: "secondary.main" }}
          />
          <FormControlLabel
            control={<Checkbox {...label} color="success" />}
            label="success"
            sx={{ color: "success.main" }}
          />
          <FormControlLabel
            control={<Checkbox {...label} color="error" />}
            label="error"
            sx={{ color: "error.main" }}
          />
          <FormControlLabel
            control={
              <Checkbox
                {...label}
                icon={<TwitterIcon />}
                checkedIcon={<TwitterIcon />}
              />
            }
            label="icon"
            sx={{ color: "primary.main" }}
          />
        </FormGroup>

        <FormGroup>
          <FormControlLabel control={<Checkbox {...label} />} label="normal" />
          <FormControlLabel
            control={<Checkbox {...label} disabled />}
            label="disabled"
          />
          <FormControlLabel
            control={<Checkbox {...label} color="success" defaultChecked />}
            label="default Checked"
          />
          <FormControlLabel
            control={<Checkbox {...label} color="error" checked />}
            label="checked"
          />
          <FormControlLabel
            control={
              <Checkbox
                {...label}
                defaultChecked
                icon={<TwitterIcon />}
                checkedIcon={<TwitterIcon />}
              />
            }
            label="icon checked"
          />
        </FormGroup>

        <RadioGroup
          aria-label="radio"
          defaultValue="" //value of default selected
          name="radio-buttons-group"
        >
          <FormControlLabel
            control={<Radio />}
            value="primary"
            label="primary"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            value="secondary"
            label="secondary"
          />
          <FormControlLabel
            control={<Radio color="success" />}
            value="success"
            label="success"
          />
          <FormControlLabel
            control={<Radio color="error" />}
            value="error"
            label="error"
          />
          <FormControlLabel
            control={<Radio color="default" />}
            value="default"
            label="default"
          />
        </RadioGroup>
      </Stack>
    </Box>
  );
};

export default InputButtons;
