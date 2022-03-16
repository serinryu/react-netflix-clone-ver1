import axios from "axios";

const instance = axios.create({
  baseURL:"http://api.themoviedb.org/3",
  params: {
    api_key: "e8e232bc97830d769cd054bcb9186be6",
    language: "ko-KR",
  }
});

export default instance;