// headers.jsx
const API_KEY = import.meta.env.VITE_API_KEY;

export function createHeaders(token, hasBody = false) {
  const headers = new Headers();

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  if (API_KEY) {
    headers.append("X-Noroff-API-Key", API_KEY);
  }

  if (hasBody) {
    headers.append("Content-Type", "application/json");
  }

  return headers;
}
