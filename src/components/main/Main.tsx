import React, { FC, useEffect } from "react";
import { getUsers } from "../../services/getUsers";
import { Table, Pagination } from "antd";
import "./main.css";
import { User } from "../../entities/user";
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/comabineActions';
import { RootState } from "../../state/reducers/combineReducer";

const Main: FC = () => {
  const dispatch = useDispatch();
  const { isLoading, page, users, total} = useSelector((state: RootState)=>state.users);
  const { setLoading, setPage, setListOfUsers, setTotal } = bindActionCreators(actionCreators, dispatch);
  // console.log(load);
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
        return (
          <div className="flex" key={e.id}>
            <a href={`mailto:${e.email}`}>{e.email}</a>
          </div>
        );
      },
      key: "email",
      width: "30%",
    },
  ];
  useEffect(() => {
    setLoading(true);
    const users = getUsers(page);
    users.then((res: any) => {
      let tempUsers: Array<object> = [];
      if (res.status === 200) {
        setTotal(res.data.total);
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
      setListOfUsers(tempUsers);
      setLoading(false);
    });
  }, [page]);

  return (
    <main className="container">
      <Table
        columns={columns}
        dataSource={users}
        pagination={false}
        loading={isLoading}
        bordered
      />
      {!isLoading && (
        <Pagination total={total} current={page} onChange={setPage} defaultCurrent={1}/>
      )}
    </main>
  );
};

export default Main;
