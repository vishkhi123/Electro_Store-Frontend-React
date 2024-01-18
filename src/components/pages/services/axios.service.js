import axios from "axios";
import { BASE_URL } from "./helperService";

export  const publicAxios=axios.create({
    baseURL:BASE_URL
})