import { createBrowserRouter } from "react-router-dom";
import path from "./path";
import Admin from "../components/admin/Admin";
import Page from "../components/page/page";
import ComponentForm from "../components/form/ComponentForm";

const router = createBrowserRouter([
  // có thằng useParams của react router dom có thể lấy id của list nhạc
  //path của react router dom cho bằng với thằng path do mình định nghĩa nằm trong file path
  {
    path: path.home, //path.home tương ứng với  "/"
    element: <Page />,
  },
  {
    path: path.admin, //path.admin  "/admin"
    element: <Admin />,
  },
  {
    path: path.form, //path.form  "/form"
    element: <ComponentForm />,
  },
  {
    path: path.formEdit, //path.formEdit  "/form/:id"
    element: <ComponentForm />,
  },
]);
export default router;
