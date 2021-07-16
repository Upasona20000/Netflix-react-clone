import axios from 'axios' //library for fetching api

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3",
})

export default instance;


