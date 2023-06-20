import React from "react";
import { needFormat } from "./utils.js";
import ComplexTree from "./complexTree.js";
import NormalTree from "./normalTree.js";

export default function Tree(props) {
  let { type, collapseIfNotEdited } = props;
  console.log(
    "🚀 ~ file: tree.js:8 ~ Tree ~ collapseIfNotEdited:",
    collapseIfNotEdited
  );
  if (needFormat(type)) {
    return <ComplexTree collapseIfNotEdited={collapseIfNotEdited} {...props} />;
  }
  return <NormalTree {...props} />;
}
