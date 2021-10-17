interface UserType {
    page: number;
    users: Array<object>[];
    isLoading: boolean;
    total: number;
  };

export const userReducer = (
  state: UserType = { page: 1, users: [], isLoading: false, total: 0 },
  action: any
) => {
  if (action.type === "setLoading") {
    return { ...state, isLoading: action.isLoading };
  }
  if (action.type === "setPage") {
    return { ...state, page: action.page };
  }
  if (action.type === "setUsers") {
    return { ...state, users: action.users };
  }
  if (action.type === "setTotal") {
    return { ...state, total: action.total };
  }
  return state;
};

