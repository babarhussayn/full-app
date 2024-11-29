import { BASE_URL } from "@/utils/services";

export function header(token: string): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
}

export const postData = async (api: string, body: object, token: string) => {
  const res = await fetch(`${BASE_URL}${api}`, {
    method: "POST",
    headers: {
      ...header(token),
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};

export const getData = async (api: string) => {
  const response = await fetch(`${BASE_URL}${api}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  return await response.json();
};

export const deleteData = (api: string, token: string) => {
  fetch(`${BASE_URL}${api}`, {
    method: "DELETE",
    headers: {
      ...header(token),
    },
  }).then((res) => {
    return res.json();
  });
};
