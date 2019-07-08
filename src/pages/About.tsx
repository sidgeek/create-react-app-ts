import React, { useContext } from "react";
// import {useDisplayMoutedOrUnMouted} from '../debug/displayMoutedOrUnMounted'
import { useIsUnMounted } from "../debug/isUnMounted";
import { TestContext } from "../contexts/global";

export default function About() {
  const number = useContext(TestContext);
  const isUnmounted = useIsUnMounted();
  setTimeout(() => {
    console.log("dg>> About isUnmounted", isUnmounted.current);
  }, 4000);

  return (
    <div>
      <h2>About {number}</h2>
    </div>
  );
}
