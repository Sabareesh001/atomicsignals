import {
  Avatar,
  styled,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  TableFooter,
  TablePagination,
  tooltipClasses,
  Switch,
  Box,
} from "@mui/material";
import ReactSpeedometer from "react-d3-speedometer";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import Table from "@mui/material/Table";
import IOSSwitch from "../switch/Switch";
import PencilIconSvg from "../../assets/icons/pencil.svg";
import StyledButton from "../button/Button";
import { useEffect, useState } from "react";
const MembersTable = ({
  headings,
  stickyheadings,
  rows,
  stickyColumnData,
  setRows,
  searchQuery = "",
}) => {
  const [filteredRows, setFilteredRows] = useState([]);
  const [currPage, setCurrPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  useEffect(() => {
    const modifiedRows = rows.filter((data) => {
      return data?.profile?.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase().trim());
    });
    const startIndex = currPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    console.log(startIndex, endIndex);
    setFilteredRows(modifiedRows.slice(startIndex, endIndex));
  }, [rows, rowsPerPage, currPage, searchQuery]);
  return (
    <TableDiv>
      <ActionStickyContainerSeparator />
      <ActionHeaderContainerSeparator />
      <ActionPaginationContainerSeparator />
      <StyledTableContainer>
        <StyledTable>
          <StyledTableHead>
            <StyledTableRow>
              {headings?.map((data) => (
                <StyledTableHeading>{data}</StyledTableHeading>
              ))}
              {stickyheadings?.map((data) => (
                <StickyHeading align="center">{data}</StickyHeading>
              ))}
            </StyledTableRow>
          </StyledTableHead>
          <TableBody>
            {filteredRows?.map((row, i) => {
              return (
                <StyledTableRow>
                  <StyledTableCell>
                    <MemberProfile>
                      <ProfileAvatar
                        height={"35px"}
                        width={"35px"}
                        src={row?.profile?.image}
                      ></ProfileAvatar>{" "}
                      {row?.profile?.name}
                    </MemberProfile>
                  </StyledTableCell>
                  <StyledTableCell>{row?.designation}</StyledTableCell>
                  <StyledTableCell>{row?.department}</StyledTableCell>
                  <StyledTableCell>
                    <SignalList>
                      {row?.signals.map((signal) => {
                        return (
                          <LightTooltip
                            fontSize={"0.8em"}
                            title={
                              <ToolTipContent>
                                <div>{`${signal?.name}`}</div>{" "}
                                {`last updated ${signal?.last_updated}`}
                              </ToolTipContent>
                            }
                            arrow
                            placement="bottom"
                          >
                            <SignalsAvatar
                              color={signal?.color}
                              bgColor={signal?.bgcolor}
                            >
                              {signal?.name[0]}
                            </SignalsAvatar>
                          </LightTooltip>
                        );
                      })}
                    </SignalList>
                  </StyledTableCell>
                  <LightTooltip
                    arrow
                    slotProps={{
                      popper: {
                        modifiers: [
                          {
                            name: "offset",
                            options: {
                              offset: [0, -25],
                            },
                          },
                        ],
                      },
                    }}
                    title="Overall Good"
                  >
                    <StyledTableCell
                      padding="0px"
                      align="center"
                      minWidth={190}
                    >
                      <ReactSpeedometer
                        width={100}
                        value={50}
                        height={70}
                        paddingHorizontal={0}
                        paddingVertical={0}
                        currentValueText={""}
                        ringWidth={10}
                        needleColor={"black"}
                        maxSegmentLabels={0}
                        needleHeightRatio={0.4}
                        minValue={0}
                        maxValue={100}
                      />
                    </StyledTableCell>
                  </LightTooltip>
                  <StyledTableCell minWidth={290}>
                    <MemberProfile>
                      <ProfileAvatar
                        height={"35px"}
                        width={"35px"}
                        src={row?.reporting_to?.[0]?.image}
                      ></ProfileAvatar>{" "}
                      {row?.reporting_to?.[0]?.name}
                      {row?.reporting_to?.length > 1 && (
                        <LightTooltip
                          title={
                            <ReportingList>
                              {row?.reporting_to?.slice(1)?.map((data) => (
                                <MemberProfile fontSize={"1.4em"}>
                                  <ProfileAvatar
                                    height={"25px"}
                                    width={"25px"}
                                    src={data?.image}
                                  ></ProfileAvatar>{" "}
                                  {data.name}
                                </MemberProfile>
                              ))}
                            </ReportingList>
                          }
                        >
                          <MoreTag>
                            + {row?.reporting_to?.length - 1} More{" "}
                          </MoreTag>
                        </LightTooltip>
                      )}
                    </MemberProfile>
                  </StyledTableCell>
                  <StyledTableCell>{row?.role}</StyledTableCell>
                  <StyledTableCell>{row?.email}</StyledTableCell>
                  <StyledTableCell>{row?.experience}</StyledTableCell>
                  <StyledTableCell>
                    <IOSSwitch
                      onChange={(e) => {
                        setRows((prev) => {
                          const newPrev = [...prev];
                          const target = newPrev.findIndex(
                            (data) => data.id === row?.id
                          );
                          newPrev[target].status = e.target.checked ? 1 : 0;
                          return newPrev;
                        });
                      }}
                      checked={row?.status}
                    />{" "}
                    {row?.status ? "Active" : "Deactive"}
                  </StyledTableCell>
                  <StickyCell align="center">
                    <ActionContainer>
                      <ActionContent>
                        <StyledButton
                          fullWidth
                          size="small"
                          variant="contained"
                        >
                          Add Feedback
                        </StyledButton>
                        <PencilIcon />
                      </ActionContent>
                    </ActionContainer>
                  </StickyCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
      <StyledBottomTableContainer>
        <Table>
          <StyledTableFooter>
            <TableRow>
              <StyledTablePagination
                page={currPage}
                onRowsPerPageChange={(e, value) => {
                  setRowsPerPage(e.target.value);
                }}
                onPageChange={(e, page) => {
                  setCurrPage(page);
                }}
                rowsPerPage={rowsPerPage}
                rowsPerPageOptions={[5, 10, 25, 50]}
                count={rows.length}
              />
            </TableRow>
          </StyledTableFooter>
        </Table>
      </StyledBottomTableContainer>
    </TableDiv>
  );
};

const ReportingList = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "5px",
});

const TableDiv = styled(Box)({
  position: "relative",
  borderRadius: "10px",
  backgroundColor: "white",
  borderLeft: "solid white 15px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.12) ",
});

const StyledTableContainer = styled(TableContainer)({
  backgroundColor: "white",
  borderRadius: "10px  10px 0px 0px ",
  position: "relative",
  fontFamily: "Poppins",
  minHeight: "40rem",
  maxHeight: "40rem",
  scrollSnapType: "both mandatory",
  scrollSnapAlign: "start",
});

const StyledBottomTableContainer = styled(TableContainer)({
  backgroundColor: "white",

  borderRadius: "0px 0px 10px  10px",
  fontFamily: "Poppins",
  zIndex: 10,
  position: "relative",
});

const StyledTablePagination = styled(TablePagination)({
  "& .MuiTablePagination-root": {
    fontFamily: "Poppins",
  },
});

const StyledTableFooter = styled(TableFooter)({});

const StyledTableRow = styled(TableRow)({});

const MemberProfile = styled("div")(({ fontSize }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  fontSize,
  width: "100%",
}));

const MoreTag = styled("div")({
  color: "#49C792",
});

const SignalsAvatar = styled(Avatar)(({ bgColor, color }) => ({
  backgroundColor: bgColor,
  color: color,
  padding: 0,
  width: "30px",
  height: "30px",
  fontSize: "small",
}));

const StyledTableHead = styled(TableHead)({
  fontWeight: "bold",
  fontFamily: "Poppins",
});

const StyledTableHeading = styled(TableCell)(({ minWidth }) => ({
  fontWeight: "500",
  fontSize: "1.07em",
  fontFamily: "Poppins",
  minWidth: minWidth || 130,
  position: "sticky",
  top: 0,
  backgroundColor: "white",
  zIndex: 1,
  borderBottom: "none",
}));

const StyledTableCell = styled(TableCell)(({ minWidth }) => ({
  fontSize: "1.07em",
  borderBottom: "none",
  padding: "0px 15px",
  cursor: "pointer",
  fontFamily: "Poppins",
  minWidth: minWidth || "1rem",
}));

const ToolTipContent = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const SignalList = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const LightTooltip = styled(({ className, fontSize, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme, fontSize }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.12) ",
    fontSize: fontSize || 11,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
}));

const StickyHeading = styled(TableCell)({
  position: "sticky",
  right: 0,
  zIndex: 2,
  fontWeight: "500",
  fontSize: "18px",
  fontFamily: "Poppins",
  borderBottom: "none",
  minWidth: 150,
  backgroundColor: "white",
  position: "sticky",
  bottom: 0,
  top: 0,
});

const ProfileAvatar = styled(Avatar)(({ height, width, fontSize }) => ({
  height,
  width,
  fontSize,
}));

const StickyCell = styled(TableCell)({
  position: "sticky",
  right: 0,
  fontSize: "16px",
  zIndex: 1,
  minWidth: 200,
  cursor: "pointer",
  backgroundColor: "white",
  borderBottom: "none",
  padding: "20px 10px",
  fontFamily: "Poppins",
});

const PencilIcon = styled((props) => <img src={PencilIconSvg} {...props} />)({
  color: "#49C792",
  backgroundColor: "#EEFBF6",
  padding: "2px",
  borderRadius: "100px",
});

const ActionContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  position: "relative",
  width: "100%",
});

const ActionStickyContainerSeparator = styled("div")({
  borderLeft: "solid rgba(0, 0, 0, 0.12) 1px",
  height: "100%",
  position: "absolute",
  zIndex: 4,
  right: 0,
  transform: "translate(-220px,0%)",
});

const ActionPaginationContainerSeparator = styled("div")({
  width: "calc(100% + 15px)",
  borderBottom: "solid rgba(0, 0, 0, 0.12) 1px",
  position: "absolute",
  bottom: 0,
  transform: "translate(-15px,-52px)",
  zIndex: 11,
});

const ActionHeaderContainerSeparator = styled("div")({
  width: "calc(100% + 15px)",
  borderBottom: "solid rgba(0, 0, 0, 0.12) 1px",
  position: "absolute",
  transform: "translate(-15px,55px)",
  zIndex: 10,
});

const ActionContent = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "center",
  flex: 1,
});

const StyledTable = styled(Table)({
  position: "relative",
});

export default MembersTable;
