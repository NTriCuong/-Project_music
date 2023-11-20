import { useDispatch, useSelector } from "react-redux";
import {
  click,
  clickSaveData,
  currentContent,
  getDataMusic,
  getDataYourMusic,
  updateCurrent,
  updateData,
} from "../store/reducers";
import ComponentLiFild from "../componentFild/ComponentLiFild";
import postApi from "../api/postApi";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import ComponentExpressiveMusic from "../componentFild/ComponentExpressiveMusic";
import ComponentContentListMusic from "../componentFild/ComponentContentListMusic";

function Content() {
  // const [url, setUrl] = useState();
  const data = useSelector(getDataMusic); //data nhac cua content
  const current = useSelector(currentContent); //bien check xem khoi content xe hien thi gi
  const dataCLick = useSelector(clickSaveData); // biến lưu data mà ta đã click
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setUrl(dataCLick?.avatar);
  // }, [dataCLick]);

  // call api
  const getAllPost = async () => {
    const res = await postApi.getAll();
    dispatch(updateData(res.data));
  };
  useEffect(() => {
    getAllPost();
  }, []);
  //data ban xep han dac biet
  const dataBXHNB = data.filter((item) => {
    return item.region === "BXHNB" && item !== dataCLick;
  });
  //data  nhac thuong
  const dataKhac = data.filter((item) => {
    return item.region === "khac" && item !== dataCLick;
  });

  const dataYourMusic = useSelector(getDataYourMusic);
  const dataFavorite = dataYourMusic.filter((data) => {
    return data !== dataCLick;
  });
  // bien check dieu kien de hien thi list
  const checkData =
    current === "content"
      ? dataKhac
      : current === "musicContent"
      ? dataBXHNB
      : dataFavorite;

  //click music de hien len giao dien cua bai nhac
  const clickMusic = (data) => {
    dispatch(click(data));
    if (current === "content") dispatch(updateCurrent("musicContent"));
  };
  // khi ấn like sẻ được thêm vào mục yêu thích
  // const Like = async (dataCLick) => {
  //   try {
  //     await postFavoriteApi.create(dataCLick);
  //     const res = await postFavoriteApi.getAll();
  //     toast.success("thêm vào yêu thích thành công");
  //     dispatch(setDataYourMusic(res.data));
  //   } catch (error) {
  //     toast.error("thêm nhack vào yêu thích không thành công");
  //   }
  // };
  // bien luu trang thai block content
  // const contentListMusic = // hien ra list nhac trang chu
  //   (
  //     <div>
  //       <h1>Bản xếp hạng nổi bật</h1>
  //       <ul className="content-list">
  //         {dataBXHNB.map((data) => {
  //           return (
  //             <ComponentLiFild
  //               className="content-list-item"
  //               data={data}
  //               onClick={() => clickMusic(data)}
  //             />
  //           );
  //         })}
  //       </ul>
  //     </div>
  //   );

  // hiện trái tim
  // const heart = () => {
  //   if (current === "content" || current === "musicContent")
  //     return (
  //       <HeartOutlined
  //         className="content-heard"
  //         onClick={() => {
  //           Like(dataCLick);
  //         }}
  //       />
  //     );
  // };

  // const contentMusic = () => {
  //   return (
  //     <div className="expressive-music">
  //       <div className="expressive-picture">
  //         <img
  //           src={url}
  //           alt="..."
  //           onError={() => {
  //             setUrl(
  //               "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
  //             );
  //           }}
  //         />
  //       </div>
  //       <div>
  //         <h3 style={{ fontSize: "50px" }} className="content-name-name">
  //           {dataCLick.music}
  //         </h3>
  //         <p className="content-name-singer">Singer: {dataCLick.singer}</p>
  //       </div>
  //       <div>
  //         <div className="content-createDate">
  //           ngày đăng tải: {dayjs(dataCLick.createDate).format("MM/DD/YYYY")}
  //         </div>
  //         {/* thẻ câch dùng thẻ audio */}
  //         <audio controls className="content-audio">
  //           <source src={dataCLick.audio} />
  //         </audio>
  //       </div>
  //       {heart()}
  //     </div>
  //   );
  // };
  console.log("current::::", current);
  return (
    <div className="content">
      <div className="content-charts">
        {current === "content" ? (
          // contentListMusic
          <ComponentContentListMusic
            dataBXHNB={dataBXHNB}
            onClick={clickMusic}
          />
        ) : (
          <ComponentExpressiveMusic current={current} />
        )}{" "}
        {/*contentMusic()*/}
      </div>
      <div className="content-other">
        <h1>
          {current === "content"
            ? "Hãy thử những bản nhạc khác"
            : current === "musicContent"
            ? "Bản xếp hạng nổi bật"
            : "Nhạc của tôi"}
        </h1>
        <ul className="content-list">
          {checkData.map((data) => {
            return (
              <ComponentLiFild
                onClick={() => {
                  clickMusic(data);
                }}
                className="content-list-item"
                data={data}
              />
            );
          })}
        </ul>
      </div>
      <div
        className={
          current !== "content" ? "end-content-block" : "end-content-none"
        }
      >
        <h1>Hãy thử những bản nhạc khác</h1>
        <ul className="content-list">
          {dataKhac.map((data) => {
            return (
              <ComponentLiFild
                onClick={() => {
                  clickMusic(data);
                }}
                className="content-list-item"
                data={data}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default Content;
