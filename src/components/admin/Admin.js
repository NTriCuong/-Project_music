import { useDispatch, useSelector } from "react-redux";
import ComponentButton from "../../componentFild/ComponentButton";
import { getDataMusic, updateData } from "../../store/reducers";
import postApi from "../../api/postApi";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Popconfirm, Table, message } from "antd";
import ImageTable from "../../componentFild/ImageTable";

function Admin() {
  const data = useSelector(getDataMusic);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // call api
  const getAllPost = async () => {
    const res = await postApi.getAll();
    dispatch(updateData(res.data));
  };
  useEffect(() => {
    getAllPost();
  }, []);
  // them moi
  const handleAdd = () => {
    navigate("/form");
  };
  const handleDelete = async (id) => {
    try {
      await postApi.delete(id);
      await getAllPost();
      toast.success("xóa thành công");
    } catch (error) {
      toast.error("xóa không thành công");
    }
  };
  // const confirm = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e);
  //   message.success("xóa");
  // };

  // const cancel = (e: React.MouseEvent<HTMLElement>) => {
  //   console.log(e);
  //   message.error("giữ");
  // };
  const convertData = () => {
    const dataBody = data.map((item, index) => {
      return {
        key: index,
        image: <ImageTable data={item} />,
        music: item.music,
        singer: item.singer,
        edit: (
          <ComponentButton
            onClick={() => {
              navigate(`/form/${item.id}`);
            }}
            style={{ background: "#fa8c16" }}
            color="primary"
            text="Edit"
          />
        ),
        //copconfirm
        delete: (
          <Popconfirm
            title="Xóa bản nhạc"
            description="Bạn có chắc chắn xóa bản nhạc này không?"
            onConfirm={() => {
              handleDelete(item.id);
              // confirm
            }}
            // onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <ComponentButton
              danger="danger"
              style={{ background: "red" }}
              color="primary"
              text="Delete"
              // onClick={() => {
              //   handleDelete(item.id);
              // }}
            />
          </Popconfirm>
        ),
      };
    });
    return dataBody;
  };
  const columns = [
    // số cột table trong and khác là phân chia theo cột và lấy ra dataIndex theo tên
    //trường của data truyền vào ở đây là convertData
    { title: "Image", dataIndex: "image" },
    { title: "Music", dataIndex: "music" },
    { title: "Singer", dataIndex: "singer" },
    {
      title: "Edit",
      dataIndex: "edit",
      // render: (index, record, text) => {
      //   // index vi tri index, record la ca opject data
      //   console.log("record:::", record);
      //   return (
      //     <ComponentButton
      //       onClick={() => {
      //         navigate(`/form/${record.id}`);
      //       }}
      //       style={{ background: "#fa8c16" }}
      //       color="primary"
      //       text="Edit"
      //     />
      //   );
      // },
    },
    {
      title: "Delete",
      dataIndex: "delete",
      // render: (index, record, text) => {
      //   // index vi tri index, record la ca opject data
      //   return (
      //     <ComponentButton
      //       style={{ background: "red" }}
      //       color="primary"
      //       text="Delete"
      //       onClick={() => {
      //         handleDelete(record.id);
      //       }}
      //     />
      //   );
      // },
    },
  ];
  return (
    <div className="admin">
      <div className="btn-addNew">
        <ComponentButton color="primary" text="Thêm mới" onClick={handleAdd} />
      </div>
      {/* <table>
        <thead>
          <tr className="admin-table">
            <th>Image</th>
            <th>Music</th>
            <th>Singer</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="scrollable-table-container">
          {data.map((item) => (
            <ComponentItemTable
              data={item}
              handleDelete={handleDelete}
              key={item.id}
            />
          ))}
        </tbody>
      </table> */}
      <Table
        columns={columns}
        dataSource={convertData()}
        pagination={false}
        scroll={{ y: "85vh" }} // thuộc tính roll của and theo x là width y là height
      />
    </div>
  );
}

// img, music, singer

export default Admin;
