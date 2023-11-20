import instance from "./axiosClient";

const postApi = {
  //get lên data với id
  getDetail: (id) => {
    return instance.get(`/total-data/${id}`);
  },
  // get all data lên
  getAll: () => {
    return instance.get("/total-data");
  },
  create: (body) => {
    //them
    return instance.post("/total-data", body);
  },
  update: (id, body) => {
    //sua
    return instance.put(`/total-data/${id}`, body);
  },
  delete: (id) => {
    //xoa
    return instance.delete("/total-data/" + id);
  },
};
export default postApi;
