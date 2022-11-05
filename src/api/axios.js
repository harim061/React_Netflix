import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params:{
        api_key : "85bcdf6d34c6c0ce8740db9adab546fd",
        language:"ko-KR",
    }
});

export default instance;