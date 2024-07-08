import { httpAxios } from "../helper/httpHelper";

export async function form(formData) {
  console.log("form");
  const result = await httpAxios
    .post("/api/contact", formData)
    .then((response) => response.data);
  return result;
}

export async function newsletter(formData) {
  console.log("news");
  const result = await httpAxios
    .post("/api/newsletter", formData)
    .then((response) => response.data);
  return result;
}
