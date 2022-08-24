import client from "./client";

const register = (pushtoken) =>{
  client.post("/expoPushTokens", { token : pushtoken.data })};

export default {
  register,
};
