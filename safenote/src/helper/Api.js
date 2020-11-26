import Axios from 'axios';

const API = Axios.create({
    baseURL: "https://safenote.tk/api/safenote/",
    timeout: 3000,
})
export default API;

// "favouritegroup": http://localhost:8000/drf/todo/favouritegroup/
// "favourite": http://localhost:8000/drf/todo/favourite/
// "todogroup": http://localhost:8000/drf/todo/todogroup/
// "todo": http://localhost:8000/drf/todo/todo/