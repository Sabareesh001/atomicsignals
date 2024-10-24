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
  tooltipClasses
} from "@mui/material";
import Table from "@mui/material/Table";
const MembersTable = ({ headings, stickyheadings, rows, stickyColumnData }) => {
  return (
    <StyledTableContainer>
      <StyledTable>
        <TableHead>
          <TableRow>
            {headings?.map((data) => (
              <TableCell>{data}</TableCell>
            ))}
            {stickyheadings?.map((data) => (
              <StickyCell>{data}</StickyCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => {
            return (
              <TableRow>
                <TableCell>
                  <MemberProfile>
                    <Avatar src={row?.profile?.image}></Avatar>{" "}
                    {row?.profile?.name}
                  </MemberProfile>
                </TableCell>
                <TableCell>{row?.designation}</TableCell>
                <TableCell>
                  <SignalList>
                    {row?.signals.map((signal) => {
                      return (
                        <LightTooltip title={<ToolTipContent><div>{`${signal?.name}`}</div> {`last updated ${signal?.last_updated}`}</ToolTipContent>} arrow placement="bottom">
                        
                        <StyledAvatar
                          color={signal?.color}
                          bgColor={signal?.bgcolor}
                        >
                          {signal?.name[0]}
                        </StyledAvatar>
                            
                        </LightTooltip>
                      );
                    })}
                  </SignalList>
                </TableCell>
                <TableCell>{row?.performance}</TableCell>
                <TableCell>{row?.reporting_to?.name}</TableCell>
                <TableCell>{row?.role}</TableCell>
                <TableCell>{row?.email}</TableCell>
                <TableCell>{row?.experience}</TableCell>
                <TableCell>{row?.status}</TableCell>
                <StickyCell>Actions</StickyCell>
                {/* {
                                row?.map((data)=>(<TableCell>{data}</TableCell>))
                            } */}
                {/* {
                                Array(headings.length-row.length+1).fill('nil').map((data)=>(
                                    <TableCell>
                                    {data}
                                    </TableCell>
                                ))
                            }
                            {
                                stickyColumnData?.map((col)=>{
                                    return(col?.map((data)=>(<StickyCell>{data}</StickyCell>)))
                                })
                            } */}
              </TableRow>
            );
          })}
           
        </TableBody>
        <TableFooter>
           <TableRow>
            <TablePagination colSpan={8}  count={rows.length} />
           </TableRow>
        </TableFooter>
      </StyledTable>
    </StyledTableContainer>
  );
};

const StyledTableContainer = styled(TableContainer)({
  backgroundColor: "white",
});

const MemberProfile = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const StyledAvatar = styled(Avatar)(({ bgColor, color }) => ({
  backgroundColor: bgColor,
  color: color,
}));

const ToolTipContent = styled("div")({
    display:'flex',
    flexDirection:'column'
})

const SignalList = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: '0px 0px 10px grey ',
      fontSize: 11,

    },
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
      },
  }));

const StickyCell = styled(TableCell)({
  position: "sticky",
  right: 0,
  zIndex: 1,
  backgroundColor: "white",
});

const StyledTable = styled(Table)({
  tableLayout: "fixed",
  minWidth: 2000,
});

export default MembersTable;
