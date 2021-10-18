export const columns = [
    {
      title: "#",
      render: (user: any) => {
        return (
          <img
            src={user.avatar}
            alt="no!!!"
            width="80px"
            key={user.avatar}
          />
        );
      },
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Show Email",
      render: (user: any) => {
        return (
          <div key={user.id}>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </div>
        );
      },
      key: "email",
      width: "30%",
    },
  ];