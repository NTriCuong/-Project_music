import { useEffect, useState } from "react";

function ComponentLiFild(props) {
  const [imgURL, setImgURL] = useState();
  const { className, data, onClick } = props;
  useEffect(() => {
    setImgURL(data?.avatar);
  }, [data]); // dòng 8 là để khi data thay đổi thì sẻ chạy vào bên trong useEffect
  return (
    <li className={className} onClick={onClick}>
      <div>
        <img
          src={imgURL}
          alt={imgURL}
          onError={() => {
            // onError nếu mà không có url của src thì sẻ chạy vào hàm bên trong onError
            setImgURL(
              "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
            );
          }}
        />
      </div>
      <h3 className="content-name-name">{data?.music}</h3>
      <p className="content-name-singer">Singer: {data?.singer}</p>
    </li>
  );
}
export default ComponentLiFild;
