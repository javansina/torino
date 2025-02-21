import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const json = await req.json();
    const { phoneNumber, accessToken, refreshToken, days } = JSON.parse(
      json.body,
    );

    if (!phoneNumber) {
      return new Response(
        JSON.stringify({ message: "شماره موبایل الزامی است" }),
        { status: 400 },
      );
    }
    const token = jwt.sign({ phoneNumber }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    const otherAcountsToken = cookies().get("otherAcountsToken");
    if (!otherAcountsToken) {
      const newAccountToken = { [token]: [accessToken, refreshToken] };
      cookies().set("otherAcountsToken", JSON.stringify(newAccountToken), {
        maxAge: days * 24 * 60 * 60,
        path: "/",
      });
      return new Response(JSON.stringify({ message: "لاگین موفق" }), {
        status: 200,
      });
    } else {
      const currentAccounts = await JSON.parse(otherAcountsToken.value);
      const numberOfCurrentAccounts = Object.keys(currentAccounts).length;
      if (numberOfCurrentAccounts < 3) {
        currentAccounts[token] = [accessToken, refreshToken];
        cookies().set("otherAcountsToken", JSON.stringify(currentAccounts), {
          maxAge: days * 24 * 60 * 60,
          path: "/",
        });
        return new Response(JSON.stringify({ message: "لاگین موفق!" }), {
          status: 200,
        });
      } else {
        return new Response(
          JSON.stringify({
            message: "محدودیت ورود ، چهار حساب کاربری است!",
          }),
          {
            status: 403,
          },
        );
      }
    }
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    });
  }
}
