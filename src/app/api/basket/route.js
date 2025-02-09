import { separate } from "@/core/utils/helper/detailsFormatter";

export async function GET(req) {
  const cookie = req.headers.get("cookie");

  let accessToken = cookie.split(";")[0].split("=")[1];

  if (!accessToken) return new Response("Unauthorized", { status: 401 });

  const userBasket = await fetch("http://localhost:6500/basket", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Cache-Control": "force-cache",
    },
  });

  const data = await userBasket.json();

  if (data.message === "سبد خرید شما خالی است") {
    return Response.json({ message: "EMPTY-BASKET" });
  } else if (data.message === "Invalid token") {
    return new Response("Invalid token", { status: 401 });
  }

  const { startDate, endDate, price: value, title } = data;
  const date = new Date(startDate);
  const dateBack = new Date(endDate);
  const travelTime = Math.round((dateBack - date) / 24 / 60 / 60 / 1000);
  const price = separate(value);

  return Response.json({ travelTime, title, price });
}
