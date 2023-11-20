import { BellOutlined, LeftOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { click, updateCurrent } from "../store/reducers";

function Header() {
  const dispatch = useDispatch();
  const handleBack = () => {
    dispatch(click());
    dispatch(updateCurrent("content"));
  };
  return (
    <header>
      <div className="header-left">
        <LeftOutlined className="header-outline-left" onClick={handleBack} />
      </div>
      <div className="header-right">
        <div className="header-premium">
          <a href="https://open.spotify.com/">Khám phá premium</a>
        </div>
        <BellOutlined className="header-bell" />
        <UserOutlined />
      </div>
    </header>
  );
}
export default Header;
