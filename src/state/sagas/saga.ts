import { put, takeEvery, call } from "redux-saga/effects";
import { getUsers } from "../../services/getUsers";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* FetchUser(action: any): object {
  try {
    console.log(action, "action");
    yield put({
      type: "setLoading",
      isLoading: true,
    });
    const users: any = yield call(getUsers, action.payload.page);
    console.log(users, ' users')
    const formatedUsers: Array<object> = users.data.data.map((user: any) => ({
      ...user,
      key: user.id,
    }));
    yield put({
      type: "setTotal",
      total: users.data.total,
    });
    yield put({ type: "setUsers", users: formatedUsers });
    yield put({
      type: "setLoading",
      isLoading: false,
    });
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    // yield put({type: "USER_FETCH_FAILED", message: e.message});
    console.log(e);
  }
}
function *SetPage(action:any){
  
try{
  console.log(action)
  yield put({type:'setPage', page:action.payload.page})
}catch(e){
  console.log(e);
}
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", FetchUser);
  yield takeEvery("SET_PAGE", SetPage);
}
// function* mySaga() {
//   yield takeLatest("USER_FETCH_REQUESTED", FetchUser);
// }

export default mySaga;
