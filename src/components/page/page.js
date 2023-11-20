import React from "react";
import Header from "../Header";
import Content from "../Content";
import Sidebar from "../Sidebar";
function Page() {
  return (
    <div className="container App">
      <Sidebar />
      <div className="page-right">
        <Header />
        <Content />
      </div>
    </div>
  );
}
export default Page;
