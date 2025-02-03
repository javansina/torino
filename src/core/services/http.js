import queryString from "query-string";

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

  // promise to test Suspense
  await new Promise((resolve) => setTimeout(resolve, 3000));

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

export { serverFetch };
