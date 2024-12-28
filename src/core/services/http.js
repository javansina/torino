import queryString from "query-string";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const serverFetch = async (
  endpoint,
  query,
  cache = { cache: "force-cache" },
) => {
  let url = BASE_URL;
  if (endpoint) url += endpoint;
  if (query) url += `?${queryString.stringify(query)}`;

  console.log(url);

  try {
    const res = await fetch(`${url}`, cache);
    const json = await res.json();
    console.log(json);

    return json;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { serverFetch };
