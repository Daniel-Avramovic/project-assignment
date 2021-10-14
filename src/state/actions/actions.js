export const setLoading = (ac) =>{
    return (dispatch) => {
        dispatch({
            type: 'setLoading',
            isLoading:ac,
        })
    }
};

export const setPage = (page) =>{
    return (dispatch) => {
        dispatch({
            type: 'setPage',
            page:page,
        })
    }
};

export const setListOfUsers = (users) =>{
    return (dispatch) => {
        dispatch({
            type: 'setUsers',
            users: users,
        })
    }
};

export const setTotal = (totalUsers) =>{
    return (dispatch) => {
        dispatch({
            type: 'setTotal',
            total: totalUsers,
        })
    }
};


