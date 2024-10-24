import { Checkbox, styled } from "@mui/material";

const CheckBox = styled(Checkbox)({
  "&.Mui-checked": {
    color: "#49C792",
  },
  padding: 5,
});

export default CheckBox;
