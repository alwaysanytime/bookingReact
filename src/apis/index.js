import axios from "axios";

const SERVER_URL = process.env.REACT_APP_BACKEND_URL || "http://127.0.0.1:5000";

const jwtInterceoptor = axios.create({});

jwtInterceoptor.interceptors.request.use((config) => {
  let tokensData = JSON.parse(localStorage.getItem("tokens"));
  config.headers.set("Authorization", `bearer ${tokensData.accessToken}`);
  return config;
});

jwtInterceoptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    try {
      if (error.response.status === 401) {
        const tokens = JSON.parse(localStorage.getItem("tokens"));
        const payload = {
          accessToken: tokens.accessToken,
          refreshToken: tokens.refreshToken,
        };

        let apiResponse = await axios.post(
          `${SERVER_URL}/api/auth/refreshtoken`,
          payload
        );
        localStorage.setItem("tokens", JSON.stringify(apiResponse.data.tokens));
        error.config.headers.set(
          "Authorization",
          `bearer ${apiResponse.data.tokens.accessToken}`
        );
        return axios(error.config);
      } else {
        return Promise.reject(error);
      }
    } catch (e) {
      localStorage.removeItem("tokens");
      window.location.replace(window.location.origin + "/admin/login");
    }
  }
);

const login = (data) => axios.post(`${SERVER_URL}/api/auth/login`, data);
const signup = (data) => axios.post(`${SERVER_URL}/api/auth/signup`, data);
const getUsers = () => jwtInterceoptor.get(`${SERVER_URL}/api/auth/user`);
const getIncomes = () => jwtInterceoptor.get(`${SERVER_URL}/api/auth/income`);
const getexpenses = () => jwtInterceoptor.get(`${SERVER_URL}/api/auth/expense`);

export const apis = {
  login,
  signup,
  getUsers,
  getIncomes,
  getexpenses,
};
