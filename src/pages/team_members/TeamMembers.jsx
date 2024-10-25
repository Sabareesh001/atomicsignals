import { Badge, colors, Divider, styled, Typography } from "@mui/material";
import Table from "../../components/table";
import StyledButton from "../../components/button/Button";
import PublishIcon from "@mui/icons-material/Publish";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SearchBox from "../../components/searchbox/SearchBox";
import CheckBox from "../../components/checkbox/CheckBox";
import ImportIconSvg from "../../assets/icons/import.svg";
import { useEffect, useState } from "react";
const TeamMembers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const [rowData, setRowData] = useState([
    {
      id: 40,
      profile: {
        name: "Ramesh",
        image:
          "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
      },
      designation: "Visual Designer",
      department: "Design",
      signals: [
        {
          name: "Excellent",
          bgcolor: "darkgreen",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Good",
          bgcolor: "green",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Moderate",
          bgcolor: "orange",
          color: "black",
          last_updated: "07 Feb '23, 11:30 AM",
        },
      ],
      performance: 90,
      reporting_to: [
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Suresh Kumaran",
        },
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Ramesh",
        },
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Ramesh",
        },
      ],
      role: "employee",
      email: "email@email.com",
      experience: "3 yrs 4 Mon",
      status: 1,
    },

    {
      id: 45,
      profile: {
        name: "Kumaresan",
        image:
          "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
      },
      designation: "Visual Designer",
      department: "Design",
      signals: [
        {
          name: "Excellent",
          bgcolor: "darkgreen",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Bad",
          bgcolor: "red",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Good",
          bgcolor: "green",
          last_updated: "07 Feb '23, 11:30 AM",
        },
        {
          name: "Moderate",
          bgcolor: "orange",
          color: "black",
          last_updated: "07 Feb '23, 11:30 AM",
        },
      ],
      performance: 90,
      reporting_to: [
        {
          image:
            "https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg",
          name: "Suresh",
        },
      ],
      role: "employee",
      email: "email@email.com",
      experience: "3 yrs 4 Mon",
      status: 0,
    },
  ]);

  useEffect(() => {
    setRowData((prev) => [
      ...prev,
      ...Array(10)
        .fill({})
        .map((_, i) => {
          const modifiedRowData = { ...rowData[0] };
          modifiedRowData.id = i;
          return modifiedRowData;
        }),
    ]);
  }, []);

  const stickyColumnData = [["Im Sticky"]];

  return (
    <TeamMembersContainer>
      <TeamMembersHeader>
        <Typography fontFamily={"Poppins"} fontSize={"1.2em"}>
          Team members
        </Typography>
        <TeamMembersPageTools>
          <CheckBoxWithLabel>
            <CheckBox></CheckBox>
            Show only my reportees
          </CheckBoxWithLabel>

          <SearchBox
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            placeholder={"Search by name, email"}
            size="small"
          ></SearchBox>
          <StyledButton variant="contained">
            <StyledBadge overlap="circular" badgeContent={1} variant="dot">
              <FilterAltOutlinedIcon />
            </StyledBadge>
          </StyledButton>
          <VerticalDivider orientation="vertical" />
          <StyledButton startIcon={<ImportIcon />} variant="outlined">
            Import
          </StyledButton>

          <StyledButton variant="contained">Add member</StyledButton>
        </TeamMembersPageTools>
      </TeamMembersHeader>
      <Table
        searchQuery={searchQuery}
        rowData={rowData}
        setRowData={setRowData}
        stickyColumnData={stickyColumnData}
      />
    </TeamMembersContainer>
  );
};

const TeamMembersContainer = styled("div")({
  padding: "30px",
  color: "#353448",
});

const TeamMembersHeader = styled("div")({
  padding: "20px 0px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const TeamMembersPageTools = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const ImportIcon = styled((props) => <img src={ImportIconSvg} {...props} />)(
  {}
);

const VerticalDivider = styled(Divider)({
  "&.MuiDivider-vertical": {
    color: "red",
    height: "20px",
    width: "1px",
    backgroundColor: "#CACACA",
  },
});

const CheckBoxWithLabel = styled("div")({
  display: "flex",
  alignItems: "center",
});

const StyledBadge = styled(Badge)({
  "& .MuiBadge-dot": {
    border: "solid white 1px",
    backgroundColor: "red",
  },
});

export default TeamMembers;
