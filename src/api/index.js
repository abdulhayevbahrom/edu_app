import axios from "axios";

const mainURL = axios.create({
  // baseURL: "https://elonbering-backend.onrender.com"
  baseURL: "http://localhost:8000",
});

export default mainURL;
