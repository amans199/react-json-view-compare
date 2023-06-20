import React, { useState, useEffect } from "react";
import Tree from "./tree.js";
import { mergeData, isArray } from "./utils.js";
import "./style.css";
const JsonCompare = (props) => {
  let { oldData, newData, collapseIfNotEdited = false } = props;
  let [data, setMergeData] = useState([]);

  useEffect(() => {
    setMergeData(mergeData(oldData, newData));
  }, [oldData, newData]);

  return (
    <pre className="c-json-view">
      <p className="c-json-outter">{isArray(newData) ? "[" : "{"}</p>
      {data.map((item, index) => (
        <Tree collapseIfNotEdited={collapseIfNotEdited} key={index} {...item} />
      ))}
      <p className="c-json-outter">{isArray(newData) ? "]" : "}"}</p>
    </pre>
  );
};

export default JsonCompare;
