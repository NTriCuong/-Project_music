import { Col, Form, Input, Row, Card, Select, message } from "antd";
import ComponentButton from "../../componentFild/ComponentButton";
import { useParams, useNavigate } from "react-router-dom";
import postApi from "../../api/postApi";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LeftOutlined } from "@ant-design/icons";

function ComponentForm() {
  const [from] = Form.useForm(); //cú pháp giống useState
  const { id } = useParams(); //{dùng detructoring để lấy thuộc tính id } useParams trả về 1 opject
  const navigate = useNavigate();

  //ham update value cac o input cua form
  const updateForm = (value) => {
    from.setFieldsValue(value); //form của Form.useForm của thư viện ant design
  };
  // hàm edit đưa dữ liệu mới lên api
  const save = async (value) => {
    try {
      await postApi.update(id, value);
      navigate("/admin");
      toast.success("chinh sua thanh cong");
    } catch (error) {
      toast.error("chinh sua khong thanh cong");
    }
  };

  // call api get len Detail theo id

  const apiDetail = async (id) => {
    if (id) {
      //dăt dk nếu như id có thì đang là trang edit mới call api get lên data cần edit
      const resDetail = await postApi.getDetail(id);
      updateForm(resDetail.data);
    }
  };
  useEffect(() => {
    apiDetail(id);
  }, []);

  // hàm thêm mới
  const create = async (value) => {
    onFinish();
    try {
      await postApi.create(value);
      updateForm("");
      navigate("/admin");
      toast.success("them thanh cong");
    } catch (error) {
      toast.error("them khong thanh cong");
    }
  };
  const handleBack = () => {
    navigate("/admin");
  };
  /////////////////////////////////////////
  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  const onFinish = () => {
    message.success("Submit success!");
  };

  return (
    <div className="body-form">
      <div className="form-div-back" onClick={handleBack}>
        <LeftOutlined className="header-outline-left" />
        <span>Back</span>
      </div>
      <Card className="form" title={id ? "Chỉnh Sữa" : "Thêm Mới"}>
        <Form
          layout="vertical"
          form={from}
          onFinish={id ? save : create}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {
            //onFinish nhận về 1 opject value của các ô input
          }
          <Row>
            <Col span={12}>
              <Form.Item
                name="music"
                label="Tên bài hát"
                className="form-item"
                rules={[
                  { required: true, message: "Bạn chưa nhập tên bài hát" },
                ]}
              >
                <Input placeholder="Nhập tên bài hát" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="singer"
                label="Ca sĩ"
                className="form-item"
                rules={[{ required: true, message: "Bạn chưa nhập tên ca sĩ" }]}
              >
                <Input placeholder="Nhập tên ca sĩ" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Region"
                name="region"
                className="form-item"
                // initialValue="Phân vùng bài nhạc" // khởi tạo giá trị ban đầu cho select hoặc input bên trong form.item
                rules={[
                  {
                    required: true,
                    message: "Bạn chưa chọn phân vùng bài nhạc",
                  },
                ]}
              >
                <Select placeholder="Phân vùng bài nhạc">
                  <Select.Option value="khac">khac</Select.Option>
                  <Select.Option value="BXHNB">BXHNB</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="avatar"
                label="Avatar"
                className="form-item"
                rules={[
                  { required: true },
                  { type: "url", warningOnly: true },
                  { type: "string", min: 6 },
                ]}
              >
                <Input.TextArea placeholder="URL avatar" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="audio"
                label="URL âm thanh"
                className="form-item"
                rules={[
                  { required: true, message: "Bạn chưa nhập URL âm thanh" },
                ]}
              >
                <Input.TextArea placeholder=" URL âm thanh" />
              </Form.Item>
            </Col>
          </Row>
          <Col span={24}>
            <Form.Item label=" ">
              <ComponentButton
                color="primary"
                text={id ? "Lưu" : "Thêm"}
                type="submit"
                className="form-btn"
              />
            </Form.Item>
          </Col>
        </Form>
      </Card>
    </div>
  );
}
export default ComponentForm;
