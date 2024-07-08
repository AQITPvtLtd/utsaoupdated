import { httpAxios } from "../helper/httpHelper";
// //get all blogs
// export async function getAllBlogs() {
//   const result = await httpAxios
//     .get("/api/getdata")
//     .then((response) => response.data);
//   return result;
// }

// export async function getOneBlog(url) {
//   const result = await httpAxios
//     .post("/api/getBlog", {url})
//     .then((response) => response.data);
//   return result;
// }

export async function addBlog(data) {
  console.log("addblog");
  try {
    const result = await httpAxios
      .post("/api/add-blog", data)
      .then((response) => response.data);
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
