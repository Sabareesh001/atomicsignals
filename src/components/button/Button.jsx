import { Button, styled } from "@mui/material";

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontFamily: "Poppins",
  "&.MuiButton-contained": {
    backgroundColor: "#49C792",
    boxShadow: "none",
    border: "none",
    "& .hover": {
      boxShadow: "none",
      border: "none",
    },
  },
  "&.MuiButton-outlined": {
    color: "#49C792",
    border: "solid #49C792 2px",
  },
}));

export default StyledButton;
