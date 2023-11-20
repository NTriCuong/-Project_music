import axios from "axios";

const instance = axios.create({
  baseURL: "https://65361a24c620ba9358ecfd8f.mockapi.io", // url api
  timeout: 5000, // thời gian hết hạn call api nếu quá thời gian tự động hủy trả về err
});
export default instance;
