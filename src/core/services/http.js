import api from "@/app/api/api";
import axios from "axios";
import queryString from "query-string";
import toast from "react-hot-toast";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const serverFetch = async (
  endpoint,
  query,
  cache = "force-cache",
  token = null,
) => {
  let url = BASE_URL;
  if (endpoint) url += endpoint;
  if (query) url += `?${queryString.stringify(query)}`;

  // Promise to test Suspense
  await new Promise((resolve) => setTimeout(resolve, 2000));

  try {
    const res = await fetch(`${url}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Cache-Control": cache,
      },
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const loginNewAcount = async (data) => {
  return api
    .post("auth/check-otp", data)
    .then((data) => {
      const {
        accessToken,
        refreshToken,
        user: { mobile },
      } = data?.data;
      return axios.post("/api/authenticate-token", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: mobile,
          accessToken,
          refreshToken,
          days: 30,
        }),
      });
    })
    .then((res) => toast.success(res.data.message))
    .catch((error) =>
      toast.error(error?.response?.data?.message || "خطایی رخ داد!"),
    );
};
export { serverFetch, loginNewAcount };
