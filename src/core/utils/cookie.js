import toast from "react-hot-toast";

function setCookie(name, value, days = 30) {
  if (typeof window !== "undefined") {
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
  }
}
async function setNewAccountCookies(
  phoneNumber,
  accessToken,
  refreshToken,
  days = 30,
) {
  try {
    fetch("/api/authenticate-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber, accessToken, refreshToken, days }),
    });
  } catch (err) {
    () =>
      new Error(
        "ورود به حساب جدید ، بامشکل مواجه شد!\nلطفا دوباره امتحان کنید",
      );
  }
}
function getOtherAccountsCookies(name) {
  if (typeof window !== "undefined") {
    console.log(document.cookie);

    const value = `; ${document?.cookie}`;

    const parts = value?.split(`; ${name}=`);

    // const token = JSON.parse(parts?.pop()?.split(";")?.shift());
    console.log(parts);
    // if (parts?.length === 2) return token;
    return parts;
  }
}

function getCookie(name) {
  if (typeof window !== "undefined") {
    const value = `; ${document?.cookie}`;

    const parts = value?.split(`; ${name}=`);

    if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
  }
}

export { setCookie, getCookie, setNewAccountCookies, getOtherAccountsCookies };
