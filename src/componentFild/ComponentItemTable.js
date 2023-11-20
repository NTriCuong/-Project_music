import { useNavigate } from "react-router-dom";
import ComponentButton from "./ComponentButton";
import { useState } from "react";
import { useEffect } from "react";

function ComponentItemTable({ data, handleDelete }) {
  const [url, setUrl] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setUrl(data?.avatar);
  }, [data]);

  // hàm ấn edit
  const handleEdit = (idEdit) => {
    navigate(`/form/${idEdit}`);
  };
  return (
    <tr>
      <td>
        <img
          src={url}
          alt="..."
          className="table-img"
          onError={() => {
            setUrl(
              "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
            );
          }}
        />
      </td>
      <td>{data.music}</td>
      <td>{data.singer}</td>
      <td>
        <ComponentButton
          style={{ background: "#fa8c16" }}
          color="primary"
          text="edit"
          onClick={() => {
            handleEdit(data.id);
          }}
        />
      </td>
      <td>
        <ComponentButton
          style={{ background: "red" }}
          color="primary"
          text="delete"
          onClick={() => {
            handleDelete(data.id);
          }}
        />
      </td>
    </tr>
  );
}
export default ComponentItemTable;
