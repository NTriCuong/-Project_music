import { useDispatch, useSelector } from "react-redux";
import { clickSaveData, setDataYourMusic } from "../store/reducers";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { HeartOutlined } from "@ant-design/icons";
import postFavoriteApi from "../api/favoriteApi";
import { toast } from "react-toastify";
import { Image } from "antd";

function ComponentExpressiveMusic({ current }) {
  const [url, setUrl] = useState("");
  const dataCLick = useSelector(clickSaveData); // biến lưu data mà ta đã click
  const dispatch = useDispatch();
  useEffect(() => {
    setUrl(dataCLick?.avatar);
  }, [dataCLick]);
  console.log("dataCLick:::::::::", dataCLick);
  // khi ấn like sẻ được thêm vào mục yêu thích
  const Like = async (dataCLick) => {
    try {
      await postFavoriteApi.create(dataCLick);
      const res = await postFavoriteApi.getAll();
      toast.success("thêm vào yêu thích thành công");
      dispatch(setDataYourMusic(res.data));
    } catch (error) {
      toast.error("thêm nhac vào yêu thích không thành công");
    }
  };
  // hiện trái tim
  const heart = () => {
    if (current === "content" || current === "musicContent")
      return (
        <HeartOutlined
          className="content-heard"
          onClick={() => {
            Like(dataCLick);
          }}
        />
      );
  };
  return (
    <div className="expressive-music">
      <div className="expressive-picture">
        <Image
          src={url}
          alt="..."
          onError={() => {
            setUrl(
              "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
            );
          }}
        />
      </div>
      <div>
        <h3 style={{ fontSize: "50px" }} className="content-name-name">
          {dataCLick.music}
        </h3>
        <p className="content-name-singer">Singer: {dataCLick.singer}</p>
      </div>
      <div>
        <div className="content-createDate">
          ngày đăng tải: {dayjs(dataCLick.createDate).format("MM/DD/YYYY")}
        </div>
        {/* thẻ câch dùng thẻ audio */}
        <audio controls className="content-audio" src={dataCLick.audio} />
      </div>
      {heart()}
    </div>
  );
}
export default ComponentExpressiveMusic;
