import { Cookie } from "remix";

export const getCookieValue = async (request: Request, cookie: Cookie) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookieValue = (await cookie.parse(cookieHeader)) || {};
  return cookieValue;
};
