import React, { FC, useEffect, useState } from "react";
import { getUsers } from "../../services/getUsers";
import { Table, Pagination, Button } from "antd";
import "./main.css";
import { User } from "../../entities/user";

const Main: FC = () => {
  const [listOfUsers, setListOdUsers] = useState<Array<object>>([]);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [id, setId] = useState<number>(0);
  //napravi constuctor za usera zbog key-a;
  const onChangePage = () => {
    if (page === 1) {
      setPage(2);
    }
    if (page === 2) {
      setPage(1);
    }
  };
  const columns = [
    {
      title: "#",
      render: (record: any) => {
        return (
          <img
            src={record.avatar}
            alt="no!!!"
            width="80px"
            key={record.avatar}
          />
        );
      },
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Show Email",
      render: (e: any) => {
        let text: string = "Click to show email!!!";
        return (
          <div className="flex" key={e.id}>
            <div>{id === e.id ? e.email : text}</div>
            <Button
              type="primary"
              onClick={() => {
                if (id !== e.id) {
                  setId(e.id);
                } else {
                  setId(0);
                }
              }}
            >
              Click Me
            </Button>
          </div>
        );
      },
      key: "email",
      width: "30%",
    },
  ];
  useEffect(() => {
    const users = getUsers(page);
    users.then((res: any) => {
      let tempUsers: Array<object> = [];
      if (res.status === 200) {
        setTotal(res.data.total);
        setLoading(false);
        res.data.data.forEach((user: any, i: number) => {
          tempUsers.push(
            new User(
              user.id,
              user.first_name,
              user.last_name,
              user.email,
              user.avatar,
              i
            )
          );
        });
      }
      setListOdUsers(tempUsers);
    });
  }, [page]);

  return (
    <main className="container">
      <Table
        columns={columns}
        dataSource={listOfUsers}
        pagination={false}
        loading={loading}
        bordered
      />
      {!loading && (
        <Pagination total={total} current={page} onChange={onChangePage} />
      )}
    </main>
  );
};

export default Main;
