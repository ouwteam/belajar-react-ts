import axios from "axios";


console.log("Main 132123 app");

axios.get("http://127.0.0.1:5500/index.html")
    .then((response) => {
        console.log(response);
    })