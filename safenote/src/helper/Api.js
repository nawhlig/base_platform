import Axios from 'axios';

const API = Axios.create({
    baseURL: "http://192.168.0.64:8000/api/safenote/",
    timeout: 3000,
})
export default API;

// "favouritegroup": http://localhost:8000/drf/todo/favouritegroup/
// "favourite": http://localhost:8000/drf/todo/favourite/
// "todogroup": http://localhost:8000/drf/todo/todogroup/
// "todo": http://localhost:8000/drf/todo/todo/