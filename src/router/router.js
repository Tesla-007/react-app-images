import React from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "../page1/page1";
import Page2 from "../page2/page2";

const DRouter = (props) => {
  return (
    <Routes>
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />}/>
    </Routes>
  );
};

export default DRouter;
