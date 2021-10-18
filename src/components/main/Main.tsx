import React, { FC, useEffect } from "react";
import { Table, Pagination } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/reducers/combineReducer";
import { columns } from './setingsForAntd'
import "./main.css";

const Main: FC = () => {
  const dispatch = useDispatch();
  const { isLoading, page, users, total } = useSelector(
    (state: RootState) => state.usersReducer
  );
  
  useEffect(() => {
    dispatch({type: 'USER_FETCH_REQUESTED', payload: {page}})
    
  }, [page]);

  return (
    <main className="container" data-testid="main">
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
