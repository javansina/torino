import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(req) {
  const request = await req.json();
  const { phoneNumber: nextAccountNumber } = JSON.parse(request.body);
  const accountsTokens = JSON.parse(cookies().get("otherAcountsToken").value);
  const accountsNumbersJwt = Object.keys(accountsTokens);
  const numbers = accountsNumbersJwt.filter((token) => {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (decoded.phoneNumber === nextAccountNumber) return true;
    } catch (error) {
      return false;
    }
  });
  delete accountsTokens[numbers[0]];
  cookies().set("otherAcountsToken", JSON.stringify(accountsTokens), {
    maxAge: 30 * 24 * 60 * 60,
    path: "/",
  });

  return new Response(JSON.stringify({ message: "success" }), { status: 200 });
}
