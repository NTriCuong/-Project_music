import { Button, Space } from "antd";

function ComponentButton(props) {
  const { text, color, type, className, onClick, style, danger } = props;
  return (
    <Space wrap>
      <Button
        danger={danger}
        style={style}
        type={color}
        htmlType={type}
        className={className}
        onClick={onClick}
      >
        {text}
      </Button>
    </Space>
  );
}
export default ComponentButton;
