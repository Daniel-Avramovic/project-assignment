import React, { FC, useEffect } from "react";
import { Table, Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/reducers/combineReducer";
import "./main.css";

const Main: FC = () => {
  const dispatch = useDispatch();
  const { isLoading, page, users, total } = useSelector(
    (state: RootState) => state.usersReducer
  );

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
      render: (e: any) => {
        return (
          <div key={e.id}>
            <a href={`mailto:${e.email}`}>{e.email}</a>
          </div>
        );
      },
      key: "email",
      width: "30%",
    },
  ];
  useEffect(() => {
    dispatch({type: 'USER_FETCH_REQUESTED', payload: {page}})
    
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
        <Pagination
          total={total}
          current={page}
          onChange={(page) => {
            dispatch({type: 'SET_PAGE', payload: {page}})}}
          defaultCurrent={1}
        />
      )}
    </main>
  );
};

export default Main;
