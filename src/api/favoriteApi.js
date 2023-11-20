import instance from "./axiosClient";

const postFavoriteApi = {
  getAll: () => {
    return instance.get("/data-favorite");
  },
  create: (body) => {
    //them
    return instance.post("/data-favorite", body);
  },
  delete: (id) => {
    //xoa
    return instance.delete(`/data-favorite/${id}`);
  },
};
export default postFavoriteApi;
