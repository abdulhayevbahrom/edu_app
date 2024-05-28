import axios from "axios";

const mainURL = axios.create({
  // baseURL: "https://edu-app-server-six.vercel.app",
  baseURL: "http://localhost:8000",
});

export default mainURL;
