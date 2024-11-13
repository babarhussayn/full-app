import { BASE_URL } from "@/utils/services";

export const postData = async (api: string, body: object, token: string) => {
  const res = await fetch(`${BASE_URL}${api}`, {
    method: "POST",
    headers: {
      token,
    },
    body: JSON.stringify(body),
  });

  return await res.json();
};
