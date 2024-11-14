import { BASE_URL } from "@/utils/services";

export const postData = async (api: string, body: object) => {
  const res = await fetch(`${BASE_URL}${api}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};
