import { styled, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchBox = styled((props) => (
  <TextField
    slotProps={{
      input: {
        startAdornment: <SearchIcon />,
      },
    }}
    variant={"outlined"}
    {...props}
  />
))({
  "& .MuiOutlinedInput-root": {
    background: "white",
    minWidth: 300,
  },
  "& .MuiOutlinedInput-input": {
    fontFamily: "Poppins",
  },
  fontFamily: "Poppins",
});

const SearchIcon = styled(SearchOutlinedIcon)({
  color: "#888888",
  paddingRight: "10px",
});

export default SearchBox;
