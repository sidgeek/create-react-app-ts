import React from "react";
// import {useDisplayMoutedOrUnMouted} from '../debug/displayMoutedOrUnMounted'
import { useIsUnMounted } from "../debug/isUnMounted";

export default function Home() {
  const isUnmounted = useIsUnMounted();
  setTimeout(() => {
    console.log("dg>> Home isUnmounted", isUnmounted.current);
  }, 4000);

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
