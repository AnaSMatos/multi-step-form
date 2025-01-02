import React from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const CustomSwitchStyle = styled(Switch)(({ theme }) => ({
  width: 54,
  height: 36,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    paddingTop: 11,
    paddingLeft: 12,
    "&.Mui-checked": {
      transform: "translateX(17px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "var(--font-primary)",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 13,
    height: 13,
    backgroundColor: "#fafafa",
    boxShadow: "none",
  },
  "& .MuiSwitch-track": {
    borderRadius: 36 / 2,
    backgroundColor: "var(--font-primary)",
    opacity: 1,
    transition: theme.transitions.create(["background-color"]),
  },
}));

export default function CustomSwitch(props) {
  return (
    <div>
      <CustomSwitchStyle {...props} />
    </div>
  );
}
