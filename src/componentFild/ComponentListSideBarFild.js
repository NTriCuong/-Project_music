import { useState, useEffect } from "react";

function ComponentListSideBarFild({ data, onClick }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(data?.avatar);
  }, [data]);

  return (
    <div className="yourList-item" onClick={onClick}>
      <img
        src={url}
        alt="..."
        onError={() => {
          setUrl(
            "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
          );
        }}
      />
      <div> {data.music}</div>
    </div>
  );
}
export default ComponentListSideBarFild;
