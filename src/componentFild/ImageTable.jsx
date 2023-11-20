import { Image } from "antd";
import { useState } from "react";
import { useEffect } from "react";

export default function ImageTable({ data }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(data.avatar);
  }, [data]);
  return (
    <Image
      width={80}
      src={url}
      alt="..."
      className="table-img"
      onError={() => {
        setUrl(
          "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
        );
      }}
    />
  );
}
