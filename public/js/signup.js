/* eslint-disable*/
import axios from "axios";
import { showAlert } from "./alerts";
export const signup = async data => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data,
      withCredentials: true,
    });
    console.log(res);
    if (res.data.status === "success") {
      showAlert("success", "Sign up  successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
