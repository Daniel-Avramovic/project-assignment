import Axios from 'axios';


export const getUsers = async (page:number)=> {

    return await Axios.get(`https://reqres.in/api/users?page=${page}`)
    .then((res:any) => {
        // console.log(res.data.data);
        return res;
    })
}
