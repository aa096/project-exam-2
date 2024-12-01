import { createHeaders } from "./headers";

export async function authFetch(url, options = {}, token) {
  const headers = createHeaders(token, Boolean(options.body));
  return fetch(url, {
    ...options,
    headers,
  });
}
