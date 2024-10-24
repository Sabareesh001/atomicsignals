import MembersTable from "./MembersTable";

const Table = ({ rowData, stickyColumnData, searchQuery = "" }) => {
  const headings = [
    "Name",
    "Designation",
    "Department",
    "Signals",
    "Overall Performance",
    "Reporting to",
    "Role",
    "Email",
    "Experience",
    "Status",
  ];

  const stickyHeadings = ["Actions"];
  return (
    <MembersTable
      headings={headings}
      stickyheadings={stickyHeadings}
      rows={rowData}
      stickyColumnData={stickyColumnData}
      searchQuery={searchQuery}
    />
  );
};

export default Table;
