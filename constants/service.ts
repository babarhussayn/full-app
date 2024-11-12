import { BASE_URL } from "@/utils/services";

export const postData = (api: string, body: string) => {
  fetch(`${BASE_URL}${api}`, {
    method: "POST",
    headers: {},
    body: JSON.stringify(body),
  }).then((res) => {
    return res.json();
  });
};
