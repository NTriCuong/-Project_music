import {
  ArrowRightOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import ComponentLiFild from "../componentFild/ComponentLiFild";
import {
  click,
  getDataYourMusic,
  setDataYourMusic,
  updateCurrent,
} from "../store/reducers";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import postFavoriteApi from "../api/favoriteApi";
import ComponentButton from "../componentFild/ComponentButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ComponentListSideBarFild from "../componentFild/ComponentListSideBarFild";
function Sidebar() {
  const dataYourMusic = useSelector(getDataYourMusic);
  const dispatch = useDispatch();

  // call api hiện list nhạc yêu thích
  const favoriteApi = async () => {
    const res = await postFavoriteApi.getAll();
    dispatch(setDataYourMusic(res.data));
  };
  useEffect(() => {
    favoriteApi();
  }, []);

  const expressiveData = (data) => {
    dispatch(click(data));
    dispatch(updateCurrent("likeMusic"));
  };
  // hàm add bỏ  yêu thích
  const unLike = async (id) => {
    try {
      await postFavoriteApi.delete(id);
      favoriteApi();
      toast.success("bỏ yêu thích thành công");
    } catch (error) {
      toast.error("bỏ yêu thích không thành công");
    }
  };
  const handleBack = () => {
    dispatch(click());
    dispatch(updateCurrent("content"));
  };
  return (
    <div className="sidebar">
      <div className="sidebar-home" onClick={handleBack}>
        <span>
          <HomeOutlined />
        </span>
        <a href="#"> Trang chủ</a>
      </div>
      <div className="sidebar-search">
        <span>
          <SearchOutlined />
        </span>
        <a href="#"> Tìm kiếm</a>
      </div>
      <div className="sidebar-library-box">
        <div className="sidebar-library">
          <MenuFoldOutlined />
          <a href="#"> Thư viện của bạn </a>
        </div>
        <div>
          <PlusOutlined className="sidebar-library-plus" />
          <ArrowRightOutlined />
        </div>
      </div>
      <div className="sidebar-library-yourList">
        <ul className="yourList">
          {dataYourMusic.map((item) => {
            return (
              <li key={item.id + item.music} className="your-list-like-music">
                <ComponentListSideBarFild
                  data={item}
                  onClick={() => {
                    expressiveData(item);
                  }}
                />
                <div className="bnt-box">
                  <ComponentButton
                    className="yourList-item-delete"
                    color="primary"
                    text="Xóa"
                    style={{ background: "red" }}
                    onClick={() => {
                      unLike(item.id);
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
