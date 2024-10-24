import MembersTable from "./MembersTable";

const Table = ({rowData,stickyColumnData})=>{
    const headings = [
        'Name',
        'Designation',
        'Signals',
        'Overall Performance',
        'Reporting to',
        'Role',
        'Email',
        'Experience',
        'Status'
    ]
    
    const stickyHeadings = [
        'Actions'
    ]
    return(
        <MembersTable 
         headings={headings}
         stickyheadings={stickyHeadings}
         rows={rowData}
         stickyColumnData={stickyColumnData}
        />
    )
}

export default Table;