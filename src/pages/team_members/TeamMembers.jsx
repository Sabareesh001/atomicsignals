import Table from "../../components/table";

const TeamMembers = () => {
  const rowData = [
    {
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
            color:'black',
            last_updated: "07 Feb '23, 11:30 AM",
          },
      ],
      performance: 90,
      reporting_to: {
        name: "steven",
      },
      role: "employee",
      email: "email@email.com",
      experience: "3 yrs 4 Mon",
      status: 1,
    },
    {
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
              color:'black',
              last_updated: "07 Feb '23, 11:30 AM",
            },
        ],
        performance: 90,
        reporting_to: {
          name: "steven",
        },
        role: "employee",
        email: "email@email.com",
        experience: "3 yrs 4 Mon",
        status: 1,
      },
  ];

  const stickyColumnData = [["Im Sticky"]];

  return (
    <div>
      <Table rowData={rowData} stickyColumnData={stickyColumnData} />
    </div>
  );
};

export default TeamMembers;
