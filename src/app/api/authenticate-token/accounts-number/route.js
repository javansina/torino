import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function GET(req) {
  try {
    const accountsTokens = JSON.parse(cookies().get("otherAcountsToken").value);
    const accountsNumbersJwt = Object.keys(accountsTokens);
    const numbers = accountsNumbersJwt
      .map((token) => {
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          return {
            phoneNumber: decoded.phoneNumber,
            token: accountsTokens[token],
          };
        } catch (error) {
          return null;
        }
      })
      .filter(Boolean);

    if (numbers.length < 1) {
      return new Response(JSON.stringify("حساب کاربری دیگری وجود ندارد!"), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(numbers), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "توکن نامعتبر است" }), {
      status: 401,
    });
  }
}
