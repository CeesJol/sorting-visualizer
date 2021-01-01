import React from "react";
import bubbleSort from "../algorithms/bubbleSort";
import verify from "../util/verify";
import generateArray from "../util/generateArray";

const IndexPage = () => {
  const arr = generateArray();
  const sortedArr = bubbleSort(arr);
  return (
    <div>
      hello world
      <br />
      array: {sortedArr.join(", ")}
      <br />
      valid: {verify(sortedArr) ? "true" : "false"}
    </div>
  );
};

export default IndexPage;
